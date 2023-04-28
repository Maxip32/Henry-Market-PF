const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "shoppingCart",

        {
            id: {
                type: DataTypes.INTEGER,

                primaryKey: true,
            },

        },
        {
            timestamps: false,
        }
    );

    const ProductsName = sequelize.models.productsName;
    const ShoppingCart = sequelize.models.shoppingCart;

    ShoppingCart.hasMany(ProductsName, {foreignKey: 'shoppingCartId'});
};  
