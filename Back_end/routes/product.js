const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const productController = require('../controllers/productController');

router.post('/addproduct',productController.addproduct);
router.get('/getproduct',productController.getProducts);
router.get('/getoneproduct/:id',productController.getOneproduct);
module.exports = router;