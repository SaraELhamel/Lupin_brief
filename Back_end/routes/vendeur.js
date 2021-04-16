const express = require('express');
const router = express.Router();
const Vendeur = require('../models/Vendeur');
const vendeurController = require('../controllers/vendeurController');

router.post('/addvendeur',vendeurController.addvend);
router.post('/signin',vendeurController.signInvendeur);
module.exports = router;