const {Order, ProductsName, User} = require("../../db");

const getOrderByUserId = async (userId) => {
    try {
        const order = await Order.findAll({
            where: {userId},
            include: [ProductsName, User],
        });
        return order;
    } catch (error) {
        return {error: error.message};
    }
}
module.exports = {
    getOrderByUserId
}