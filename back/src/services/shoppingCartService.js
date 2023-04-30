const {ShoppingCart, Products} = require("../db");


const getShoppingCartById = async (id) => {
    try {
        const shoppingCart = await ShoppingCart.findByPk(id, {
            include: Products
        });
        return shoppingCart;
    } catch (error) {
        return {error: error.message};
    }
}

const getAllShoppingCarts = async () => {
    try {
        const shoppingCarts = await ShoppingCart.findAll({
            include: Products
        });
        return shoppingCarts;
    } catch (error) {
        return {error: error.message};
    }
}

const createShoppingCart = async (listProducts) => {
    try {
        if(typeof listProducts !== "object" ) return {error: "Ingrese un array"}
        const cart = await ShoppingCart.create({
            listProducts: listProducts
        });
        return cart;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getShoppingCartById,
    getAllShoppingCarts,
    createShoppingCart
}