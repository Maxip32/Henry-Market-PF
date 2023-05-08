const {Order, ProductsName, User} = require("../../db");

const getAllOrders = async () => {
    try {
        const orders = await Order.findAll({
            include: [ProductsName, User],
        });
        return orders;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getAllOrders
}