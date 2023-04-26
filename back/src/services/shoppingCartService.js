const {ShoppingCart} = require("../db");

const getShoppingCartById = async (id) => {
    try {
        return await ShoppingCart.findByPk(id);
    } catch (error) {
        return { error: error.message };
    }
}