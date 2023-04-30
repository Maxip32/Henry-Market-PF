const {getShoppingCartById, getAllShoppingCarts, createShoppingCart} = require("../../services/shoppingCartService");

module.exports = {
    getShoppingCartById: async (req, res) => {
        const id = req.params.id;
        try {
            const response = await getShoppingCartById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    getAllShoppingCarts: async (req, res) => {
        try {
            const response = await getAllShoppingCarts();
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    createShoppingCart: async (req, res) => {
        const { listProducts } = req.body;
        try {
            const response = await createShoppingCart(listProducts);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
}