const shoppingCartRouter = require("express").Router();
const controller = require("../controllers/User/ShoppingCartControllers");

shoppingCartRouter.get("/", controller.getAllShoppingCarts);
shoppingCartRouter.get("/:id", controller.getShoppingCartById);

module.exports = shoppingCartRouter;