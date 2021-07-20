const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController');

// // retrieve all users
// router.get('/', userController.findAll);

// // retrieve a single user with id
// router.get('/:id', userController.findById);

// // update a user with id
// router.get('/:id', userController.update);

// // delete a user with id
// router.get('/:id', userController.delete);


module.exports = (app) => {
    app.route('/users')
    .get(userController.findAll)

    app.route('/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.delete)
}