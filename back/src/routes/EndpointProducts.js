const express = require('express');
const router = express.Router();
const productsController = require('./ProductsDetail');

routes.get('/product', productsController.getAllProducts);

module.exports = router;   
