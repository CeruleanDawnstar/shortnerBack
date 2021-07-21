const express = require('express')
const router = express.Router()
const urlLinkController =   require('../controller/urlLinksController');
const urlRedirectRoute = require('../controller/redirect')

// Retrieve all links
router.get('/', urlLinkController.findAll);

// create short link
router.post('/', urlLinkController.create);

router.get('/', urlRedirectRoute.findOne);

module.exports = router