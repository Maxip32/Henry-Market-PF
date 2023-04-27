
const { Router } = require("express");
const { getAllProducts } = require('../controllers/Products/AllProducts');
const { getByCategory } = require('../controllers/Products/ProductByCategory');
const { getByName } = require('../controllers/Products/ProductByName')

const productsRouter = require("./Products");
const userRouter = require("./User");
const shoppingCartRouter = require("./ShoppingCartRoute");

const router = Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCartRouter);


module.exports = router;
