const Utilisateurs = require('../models/userModels');


exports.findAll = function(req, res) {
    Utilisateurs.findAll(function(err, User) {
        console.log('controller')
        if(err)
        res.send(err);
        console.log('res', User);
        res.send(User);
    });
};

exports.findById = function(req, res) {
    Utilisateurs.findById(req.params.id, function(err, User) {
        if(err)
        res.send(err);
        console.log('res', User);
        res.send(User);
    });
};

exports.update = function(req, res) {

        console.log(req.body);
        Utilisateurs.update(req.params.id, new Utilisateurs(req.body),
        function(err, User) {
            if(err) {
                res.send(err);
            }
                else {
                    res.json({error:false, message: 'User successfully updated'});
                    console.log(User);
                }
    
        });

};

exports.delete = function(req, res) {
    Utilisateurs.delete(req.params.id, function(err, User) {
        if(err)
        res.send(err);
        res.json({error:false, message: 'User successfully deleted'});
    });
};

