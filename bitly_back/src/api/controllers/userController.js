const utilisateurs = require('../models/userModels');


exports.findAll = function(req, res) {
    utilisateurs.findAll(function(err, User) {
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

exports.update = (req, res)=> {
    utilisateurs.update(req.params.id, new utilisateurs(req.body), (err, data) =>{
        if (err) {
        res.status(500);
        res.json({
            message: "Erreur serveur."
        });
        } else {
        res.status(200);
        res.json({ message: 'User successfully updated' });
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