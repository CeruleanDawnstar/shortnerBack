const linkController = require('../controller/urlLinksController');
const jwtMiddleWare = require('../middlewares/jwtmiddleware')

module.exports = (app) => {
    app.route('/link')
        .get(jwtMiddleWare.verifyToken, linkController.findAll) // Retrieve all links
        .post(linkController.create);// Create a new link

    app.route('/link/:id')
        .get(jwtMiddleWare, linkController.findById) // Retrieve a single link with id
        .put(jwtMiddleWare.verifyToken, linkController.update) // Update a link with id
        .delete(jwtMiddleWare.verifyToken, linkController.delete); // Delete a link with id
}



