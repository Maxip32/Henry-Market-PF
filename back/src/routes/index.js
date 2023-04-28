
const { Router } = require("express");

const productsRouter = require("./Products");
const userRouter = require("./User");
const shoppingCartRouter = require("./ShoppingCartRoute");
const adminRouter = require("./Admin");

const router = Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCartRouter);
router.use("/admin", adminRouter)

module.exports = router;
