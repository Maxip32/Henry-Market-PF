const { Router } = require("express");

const productsRouter = require("./Products");
const userRouter = require("./User");

const router = Router();

router.use("/user", userRouter);
router.use("/products", productsRouter);

module.exports = router;
