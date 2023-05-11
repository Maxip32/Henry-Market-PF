const {Order, OrderDetail, ProductsName} = require("../../db");

// TODO: delete order if mercadoPago feedback return error
/*const deleteOrder = async (id) => {
    try {
        const orderDetail = await OrderDetail.findAll({
            where: {orderId: id}
        })

        let destroyPromises = []
        for (let i = 0; i < orderDetail.length; i++) {
            destroyPromises.push(orderDetail[i].destroy())
        }
        await Promise.all(destroyPromises);

        const order = await Order.findByPk(id);
        await order.destroy();
    } catch (error) {
        return {error: error.message};
    }
}*/

module.exports = {
    //deleteOrder
}