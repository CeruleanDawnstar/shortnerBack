const userController = require('../controllers/userController');

module.exports = (app) => {
    app.route('/users')
    .get(userController.findAll)

    app.route('/users/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.delete)
}