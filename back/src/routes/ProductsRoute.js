const productsRouter = require("express").Router();

const {getAllProducts} = require('../controllers/Products/AllProducts');
const {getByCategory} = require('../controllers/Products/ProductByCategory');
const {getByName} = require('../controllers/Products/ProductByName')
const {createProducts} = require('../controllers/Products/CreateProducts')
const {deleteProducts} = require('../controllers/Products/DeleteProducts')
const {editeProducts} = require('../controllers/Products/EditeProduct')
const {getProductById} = require('../controllers/Products/getProductsById')
const {createProductsFromData} = require("../controllers/Products/CreateProductsFromDataUtils");

const {validateAccessToken} = require("../middlewares/auth0.middleware.js");


productsRouter.get('/', validateAccessToken, getAllProducts);
productsRouter.get('/category/:category', getByCategory);
productsRouter.get('/name/:name', getByName);
productsRouter.get('/:id', validateAccessToken, getProductById)

productsRouter.post('/', createProducts);
productsRouter.delete('/:id', deleteProducts);
productsRouter.put('/:id', editeProducts);

productsRouter.get('/create/data', createProductsFromData)

module.exports = productsRouter;
