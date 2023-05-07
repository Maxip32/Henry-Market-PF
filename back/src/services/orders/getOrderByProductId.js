const {Order, User, ProductsName} = require("../../db");

const getOrderByProductId = async (productId) => {
    try {
        const order = await Order.findAll({
            include: [
                {
                    model: User,
                },
                {
                    model: ProductsName,
                    where: {id: productId}
                }
            ]
        });
        return order;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getOrderByProductId
}