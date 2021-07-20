const express = require('express')
const router = express.Router()
const urlLinkController =   require('../controller/urlLinksController');

// Retrieve all links
router.get('/', urlLinkController.findAll);

// create short link
router.post('/', urlLinkController.create);


module.exports = router