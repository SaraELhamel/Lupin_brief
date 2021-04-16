const express = require('express');
const router = express.Router();
// const Acheteur = require('../models/Acheteur');
const acheteurController = require('../controllers/acheteurController');

router.post('/addachet',acheteurController.addachet);

module.exports = router;