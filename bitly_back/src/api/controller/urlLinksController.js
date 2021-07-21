const urlLink = require('../models/urlLinks');
const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();

const connection = dataBaseHandler.createConnection();
const validUrl = require("valid-url");
const shortid = require("shortid");

exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
            //the API base URL 
            const baseUrl = "http://localhost:8125"
            const longUrl= req.body.longUrl;
            console.log(longUrl)
    
            if(!validUrl.isUri(baseUrl)){
                return res.status(401).json("Invalid baseUrl");
            }
      
            const urlCode = shortid.generate()
            console.log(urlCode)
        
            if (validUrl.isUri(longUrl)) {
                try {
                 connection.query(`SELECT longLink, shortLink FROM link WHERE longLink = ${longUrl}`, [longUrl], (err, result)=>{
                  if (result) {
                   return  res.status(200).json(result);
                  } else {
                   const shortUrl = baseUrl + "/" + urlCode;
                   console.log(shortUrl) 
              
                        const newLinks = new urlLink({
                            longLink: longUrl,
                            shortLink: shortUrl,
                            qrCode: urlCode,
                            /*title : req.body.title,
                            idUser : req.body.idUser,*/
                            date : req.body.dateLink
                        });
                    
                    
                    
                    urlLink.create(newLinks, (err, data) => {
                    
                            if (err)
                            res.status(500).send({
                              message:
                                err.message || "Some error occurred while creating the Customer."
                            });
                          else res.send(data);
                        });
                    
                    }


                  }
                );
            }
          // exception handler
          catch (err) {
               console.log(err)
               res.status(500).json('Server Error')
             }
           } else {
           res.status(401).json('Invalid longUrl')
           }
          }



exports.findAll = (req, res) => {
    urlLink.findAll((err, links)=>{
        console.log('controller')

        if(err)

        res.send(err);

        console.log('res', links)

        res.send(links)
    })
  }
