const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();
const connection = dataBaseHandler.createConnection();


const Utilisateurs = function(User){(

    this.idUser = User.idUser,
    this.pseudo = User.pseudo,
    this.password = User.password
)};

Utilisateurs.findById = function (idUser, result) {
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


Utilisateurs.findAll = function (result) {
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

// Utilisateurs.update = function(idUser, User, result) {
//     connection.query("UPDATE User SET ? WHERE idUser = ?",[User, idUser],
//     function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };

Utilisateurs.update = function(idUser, User, result){
    console.log(User);
    dbConn.query("UPDATE User SET ? WHERE idUser = ?", [User, idUser],  (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};




Utilisateurs.delete = function(idUser, result) {
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


  module.exports = Utilisateurs;