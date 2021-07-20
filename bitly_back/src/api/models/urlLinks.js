//const dbConn = require('../config/DataBaseHandler');
const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();
const dbConn = dataBaseHandler.createConnection();


const urlLink = function (link){
    this.longLink = link.longUrl;
    this.shortLink = link.shortUrl;
    this.qrCode = link.qrCode;
    this.title = link.title;
    this.idUser = link.idUser;
    this.dateLink = link.dateLink
};

urlLink.create = (newLinks, result)=>{
    dbConn.query("INSERT INTO link SET ?", newLinks, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertedId)
            result(null, {id: res.insertedId, ...newLinks });
        }        
    })
}

urlLink.findAll = (result)=>{
    dbConn.query("SELECT idLink, longLink, shortLink FROM link", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log('links : ', res)
            result(null, res);
        }
    })
}

urlLink.findById = (id, result)=>{
    dbConn.query("SELECT * FROM link WHERE id = ?", id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(res);
        }
    })
}


module.exports = urlLink;