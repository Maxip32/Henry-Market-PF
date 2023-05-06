const {Order, OrderDetail, ProductsName} = require("../../db");
const mercadoPago = require("mercadopago")

mercadoPago.configure({
    access_token: "ACCESS_TOKEN"
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
    try {
        // format order data to create
        const formatOrder = {
            orderAmount: order.orderAmount,
            orderTotal: order.orderTotal,
            userId: order.userId
        }

        const newOrder = await Order.create(formatOrder); // create new order
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
        await OrderDetail.bulkCreate(formatOrderDetail); // create orderDetails for new order

        let allProductsPromises = []
        for (let i = 0; i < order.items.length; i++) {
            allProductsPromises.push(ProductsName.findByPk(order.items[i].id)) // array of products promises
        }
        const allProducts = await Promise.all(allProductsPromises); // get all products

        let stockPromises = []
        for (let i = 0; i < allProducts.length; i++) {
            stockPromises.push(
                allProducts[i].update({stock: allProducts[i].stock - order.items[i].quantity}) // array update stock of products
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

        return await mercadoPago.preferences.create(dataToSend); // send data to mercadoPago - id property is necessary in frontend
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    createOrder
}