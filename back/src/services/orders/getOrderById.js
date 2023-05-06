const {Order, ProductsName, User} = require("../../db");

const getOrderById = async (id) => {
    try {
        const order = await Order.findByPk(id, {
            include: [ProductsName, User],
        });
        return order;
    } catch (error) {
        return {error: error.message};
    }
}
module.exports = {
    getOrderById
}