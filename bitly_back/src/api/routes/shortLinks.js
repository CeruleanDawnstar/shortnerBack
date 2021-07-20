const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const validUrl = require("valid-url");
const shortid = require("shortid");


const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();

const connection = dataBaseHandler.createConnection();

const jwtSecret = process.env.JWT_SECRET || "jwt_secret";


router.post("/", async (req, res) => {

    // the API base URL 
    const baseUrl = "http://localhost:8125"
    const {longUrl}= req.body;

    console.log(longUrl)

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json("Invalid baseUrl");
    }

    const urlCode = shortid.generate()

    console.log(urlCode)

    testUrl = "'"+longUrl+"'"

    if(validUrl.isUri(longUrl)){

        try{

         
            connection.query(`SELECT longLink, shortLink FROM link WHERE longLink = ${testUrl}`, [testUrl], (err, result)=>{
                if(result) {

                    return  res.status(200).json(result);

                }else{

                const shortUrl = baseUrl + "/" + urlCode;

                console.log(shortUrl)

                testUrlShort = "'"+shortUrl+"'"
                qcode = 1234

                url  = `INSERT INTO link (longLink, shortLink, qrCode) VALUES (${testUrl}, ${testUrlShort}, ${qcode})`, [testUrl], [testUrlShort], [qcode];
                //INSERT INTO `link` (`idLink`, `longLink`, `shortLink`, `qrCode`, `idUser`, `title`, `dateLink`) VALUES (NULL, 'https://www.dataschool.io/how-to-contribute-on-github/', '233mmm', '', '11', NULL, NULL);

                connection.query(url, function (err, result){
                    if(err) throw err;
                    console.log("record inserted")
                    return res.status(201).send({
                        "longUrl":testUrl,
                        "shortUrl": testUrlShort
                    });
                });

            }});
        }catch(err){
            console.error(err.message);
            return res.status(500).json("Internal Server error " + err.message);
        }
    }else{
        res.status(400).json("Invalid URL.");
    }    
});


module.exports = router;

