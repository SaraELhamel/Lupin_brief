const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const adminController = require('../controllers/adminController');

router.post('/addadmin',adminController.addAdmin);
router.get('/alladmin',adminController.getAdmin);
router.post('/signinadmin',adminController.signInadmin);

module.exports = router;