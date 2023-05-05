const {Order, OrderDetail, ProductsName, User} = require("../db");

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
const createOrder = async (order) => {
    try {
        const formatOrder = {
            orderAmount: order.orderAmount,
            orderTotal: order.orderTotal,
        }
        const newOrder = await Order.create(formatOrder);
        const getNewOrder = await Order.findByPk(newOrder.id)

        const formatOrderDetail = order.orderDetails.map(detail => {
            return {
                orderId: getNewOrder.id,
                productsNameId: detail.productsNameId,
                detailAmount: detail.detailAmount,
                detailTotal: detail.detailTotal,
            }
        })

        const createOrderDetail = await OrderDetail.bulkCreate(formatOrderDetail);
    } catch (error) {
        return {error: error.message};
    }
}
module.exports = {
    getOrderById,
    getOrderByUserId,
    getOrderByProductId,
    getOrderByUserIdAndProductId,
    getAllOrders,
    createOrder
}