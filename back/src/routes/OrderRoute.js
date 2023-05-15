const orderRouter = require("express").Router();
const orderController = require("../controllers/Orders/OrderController");
const {validateAccessToken} = require("../middlewares/auth0.middleware");

orderRouter.get("/", orderController.getAllOrders);
orderRouter.get("/:id", orderController.getOrderById);
orderRouter.get("/user/:userId", orderController.getOrderByUserId);
orderRouter.get("/product/:productId", orderController.getOrderByProductId);
orderRouter.get("/:userId/:productId", orderController.getOrderByUserIdAndProductId);
orderRouter.post("/", validateAccessToken, orderController.createOrder);

module.exports = orderRouter;