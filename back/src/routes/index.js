
const { Router } = require("express");

const productsRouter = require("./ProductRoute");
const userRouter = require("./User");
const shoppingCartRouter = require("./ShoppingCartRoute");
const reviewRouter = require('./reviewRoute')
const favoriteRouter = require('./Favorites')

const router = Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCartRouter);
router.use("/review", reviewRouter);
router.use("/favorite", favoriteRouter);

module.exports = router;
