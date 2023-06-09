const {getOrderById} = require("../../services/orders/getOrderById");
const {getOrderByUserId} = require("../../services/orders/getOrderByUserId");
const {getOrderByProductId} = require("../../services/orders/getOrderByProductId");
const {getOrderByUserIdAndProductId} = require("../../services/orders/getOrderByUserIdAndProductId");
const {getAllOrders} = require("../../services/orders/getAllOrders");
const {createOrder} = require("../../services/orders/createOrder");

module.exports = {
    getOrderById: async (req, res) => {
        try {
            const response = await getOrderById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    getOrderByUserId: async (req, res) => {
        try {
            const response = await getOrderByUserId(req.params.userId);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    getOrderByProductId: async (req, res) => {
        try {
            const response = await getOrderByProductId(req.params.productId);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    getOrderByUserIdAndProductId: async (req, res) => {
        try {
            const response = await getOrderByUserIdAndProductId(req.params.userId, req.params.productId);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    getAllOrders: async (req, res) => {
        try {
            const response = await getAllOrders();
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    // TODO: get feedback logic
    /*    getFeedBack: async (req, res) => {
            if (req.query.status !== "approved") {
                delete order and details
            }
        },*/
    createOrder: async (req, res) => {
        try {
            const response = await createOrder(req.body);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}