const {ShoppingCart, ProductsName} = require("../db");

const getShoppingCartById = async (id) => {
    try {
        const shoppingCart = await ShoppingCart.findByPk(id, {
            include: ProductsName
        });
        return shoppingCart;
    } catch (error) {
        return {error: error.message};
    }
}

const getAllShoppingCarts = async () => {
    try {
        const shoppingCarts = await ShoppingCart.findAll({
            include: ProductsName
        });
        return shoppingCarts;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getShoppingCartById,
    getAllShoppingCarts
}