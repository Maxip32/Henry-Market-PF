const productsRouter = require("express").Router();

const { getAllProducts } = require('../controllers/Products/AllProducts');
const { getByCategory } = require('../controllers/Products/ProductByCategory');
const { getByName } = require('../controllers/Products/ProductByName')
const {createProducts} = require('../controllers/Products/CreateProducts')
const {deleteProducts} = require('../controllers/Products/DeleteProducts')
const {editeProducts} = require('../controllers/Products/EditeProduct')


productsRouter.get('/', getAllProducts);
productsRouter.get('/category/:category', getByCategory);
productsRouter.get('/name/:name', getByName);

productsRouter.post('/', createProducts);
productsRouter.delete('/:id', deleteProducts);
productsRouter.put('/', editeProducts);

module.exports = productsRouter;
