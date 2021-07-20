const express = require('express');
const router = express.Router();

const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();

const connection = dataBaseHandler.createConnection();

const jwtSecret = process.env.JWT_SECRET || "jwt_secret";
const saltRounds = process.env.SALT_ROUNDS || "10";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


var User = function(user){
    this.idUser = user.idUser;
    this.pseudo = user.pseudo;
    this.password = user.password;
};

User.findById = function (id, result) {
    connection.query("SELECT * from User where idUser = ?", id, function (err, res) {
        if(err) {
            console.log("error: ", err);

            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findAll = function (result) {
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

User.update = function(idUser, User, result) {
    connection.query("UPDATE User SET pseudo=?,password=? WHERE idUser = ?",[user.pseudo,user.password, idUser],
    function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.delete = function(idUser, result) {
    connection.query("DELETE FROM User WHERE id = ?", [idUser], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};


  module.exports = User;
  module.exports = router;