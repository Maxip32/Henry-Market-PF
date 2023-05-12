const {Order, OrderDetail, ProductsName, conn} = require("../../db");
const mercadoPago = require("mercadopago")

mercadoPago.configure({
    access_token: "TEST-7665525809094325-050618-44b625e0eb6a48b5f2446b984fa77f04-39069965"
})

// model example for order
const orderDataExample = {
    orderAmount: 100, // total quantity of products
    orderTotal: 150, // total price
    userId: 1, // user id
    items: [
        {
            id: 1, // product id | required
            title: "Producto 1", // product name | required
            description: "Descripcion del producto 1", // product description optional
            picture_url: "https://product_1.jpg", // product image url optional
            quantity: 2, // quantity of product | required
            unit_price: 100, // product price | required
        }
    ]
}

// create order - orderDetail and mercadoPago data, update products stock
const createOrder = async (order) => {
    //const transaction = await conn.transaction() // start transaction for revert in case of error

    try {
        // format order data to create
        /*const formatOrder = {
            orderAmount: order.orderAmount,
            orderTotal: order.orderTotal,
            userId: order.userId
        }

        const newOrder = await Order.create(formatOrder, {transaction}); // create new order
        const getNewOrder = await Order.findByPk(newOrder.id) // get new order
        // format orderDetails data
        const formatOrderDetail = order.items.map(item => {
            return {
                orderId: getNewOrder.id,
                productsNameId: item.id,
                detailAmount: item.quantity,
                detailTotal: item.unit_price,
            }
        })
        await OrderDetail.bulkCreate(formatOrderDetail, {transaction}); // create orderDetails for new order

        let allProductsPromises = []
        for (let i = 0; i < order.items.length; i++) {
            allProductsPromises.push(ProductsName.findByPk(order.items[i].id)) // array of products promises
        }
        const allProducts = await Promise.all(allProductsPromises); // get all products

        let stockPromises = []
        for (let i = 0; i < allProducts.length; i++) {
            stockPromises.push(
                allProducts[i].update({stock: allProducts[i].stock - order.items[i].quantity}, {transaction}) // array update stock of products
            )
        }
        await Promise.all(stockPromises); // update stocks

        const dataToSend = {
            items: order.items,
            back_urls: {
                success: "https://localhost:3000/feedback",
                failure: "https://localhost:3000/feedback",
                pending: ""
            }
        }

        const preference = await mercadoPago.preferences.create(dataToSend); // send data to mercadoPago - id property is necessary in frontend
        await transaction.commit() // commit transaction in case of success
        return preference*/
        const dataToSend = {
            items: order.items,
            back_urls: {
                success: "https://localhost:3000/feedback",
                failure: "https://localhost:3000/feedback",
                pending: ""
            },
            auto_return: "approved",
        }
        const preference = await mercadoPago.preferences.create(dataToSend); // send data to mercadoPago - id property is necessary in frontend
        return preference
    } catch (error) {
        //await transaction.rollback() // rollback transaction in case of error
        return {error: error.message};
    }
}

module.exports = {
    createOrder
}
