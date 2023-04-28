
const { Router } = require("express");

const productsRouter = require("./Products");
const userRouter = require("./User");
const shoppingCartRouter = require("./ShoppingCartRoute");
const favRouter = require('./Favs');

const router = Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCartRouter);
router.use('/favs', favRouter);

module.exports = router;
