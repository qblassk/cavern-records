const express = require('express');
const mainController = require('../controllers/mainController')

const router = express.Router();

const homeRoute = router.get('/', mainController.renderHome);

const aboutRoute = router.get('/about', mainController.renderAbout);


module.exports = {homeRoute, aboutRoute}