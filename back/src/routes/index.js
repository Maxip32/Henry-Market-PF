const {Router} = require("express");

const productsRouter = require("./Products");
const userRouter = require("./User");
const shoppingCartRouter = require("./ShoppingCartRoute");

const router = Router();

router.use("/user", userRouter);
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCartRouter);


module.exports = router;
