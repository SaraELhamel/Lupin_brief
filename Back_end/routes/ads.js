const express = require('express');
const router = express.Router();
const Ads = require('../models/Ads');
const adsController = require('../controllers/adsController');

router.post('/addpublic',adsController.addpublici);




module.exports = router;