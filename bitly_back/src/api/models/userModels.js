const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();
const connection = dataBaseHandler.createConnection();

const utilisateurs = function(User){
    this.pseudo = User.pseudo;
    this.password = User.password;
}

utilisateurs.findById = function (idUser, result) {
    connection.query("SELECT * from User WHERE idUser =?", idUser, function (err, res) {
        if(err) {
            console.log("error: ", err);

            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

utilisateurs.findAll = function (result) {
    connection.query("Select * from User", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Liste des Users : ', res);
            result(null, res);
        }
    });
};

utilisateurs.update = function(idUser, User, result){
    console.log(User);
    connection.query("UPDATE User SET ? WHERE idUser = ?", [User, idUser],  (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

utilisateurs.delete = function(idUser, result) {
    connection.query("DELETE FROM User WHERE idUser = ?", [idUser], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = utilisateurs;