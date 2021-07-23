const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();
const dbConn = dataBaseHandler.createConnection();

const urlLink = function (link){
    this.longLink = link.longLink;
    this.shortLink = link.shortLink;
    this.qrCode = link.qrCode;
    this.title = link.title;
    this.idUser = link.idUser;
    this.dateLink = new Date();
};

urlLink.create = (newLinks, result)=>{
    dbConn.query("INSERT INTO link SET ?", newLinks, (err, res)=>{
        if(err){
            result(err, null);
        }else{
            result(null, {id: res.insertedId, ...newLinks });
        }
    })
}

urlLink.findAll = (result)=>{
    dbConn.query("SELECT idLink, longLink, shortLink FROM link", (err, res)=>{
        if(err){
            result(err, null);
        }else{
            result(null, res);
        }
    })
}

urlLink.findById = (id, result)=>{
    dbConn.query("SELECT * FROM link WHERE idLink = ?", [id], (err, res)=>{
        if(err){
            result(err, null);
        }else{
            result(res);
        }
    })
}

urlLink.findOne = (qrCode, result)=>{
    dbConn.query("SELECT longLink FROM link WHERE qrCode = ?", [qrCode], (err, res)=>{
        if(err){
            result(err, null);
        }else{
            //const url = JSON.parse(resp[0])
            //console.log(url.longLink);
            result(res[0].longLink);
        }
    })
}


urlLink.update = function(id, link, result){
    dbConn.query("UPDATE link SET ? WHERE idLink = ?", [link, id],  (err, res) => {
        if(err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

urlLink.delete = function(id, result){
    dbConn.query("DELETE FROM link WHERE idLink = ?", [id], function (err, res) {
        if(err) {
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = urlLink;