const Users = require('../models/userModels');


exports.findAll = function(req, res) {
    Users.findAll(function(err, User) {
        console.log('controller')
        if(err)
        res.send(err);
        console.log('res', User);
        res.send(User);
    });
};

exports.findById = function(req, res) {
    Users.findById(req.params.id, function(err, User) {
        if(err)
        res.send(err);
        console.log('res', User);
        res.send(User);
    });
};

exports.update = function(req, res) {
    // if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    //     res.status(400).send({error:true, message: 'Please provide all required field'});
    // }
    // else {
        console.log(req.body);
        Users.update(req.params.id, new Users(req.body),
        function(err, User) {
            if(err) {
                res.send(err);
            }
                else {
                    res.json({error:false, message: 'User successfully updated'});
                    console.log(User);
                }
    
        });
//    }
};

exports.delete = function(req, res) {
    Users.delete(req.params.id, function(err, User) {
        if(err)
        res.send(err);
        res.json({error:false, message: 'User successfully deleted'});
    });
};

