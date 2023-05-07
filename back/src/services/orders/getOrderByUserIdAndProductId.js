const {Order, User, ProductsName} = require("../../db");
const getOrderByUserIdAndProductId = async (userId, productId) => {
    try {
        const order = await Order.findAll({
            where: {userId},
            include: [
                {
                    model: User,
                },
                {
                    model: ProductsName,
                    where: {id: productId}
                }]
        });
        return order;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getOrderByUserIdAndProductId,
}