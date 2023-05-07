require("dotenv").config();
const {Sequelize, DataTypes} = require("sequelize");
const fs = require("fs");
const path = require("path");
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henrymarket`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))

    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Inyectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {User, ProductsName, ShoppingCart, Review, Order, OrderDetail} = sequelize.models;

//Aca vendrian las relaciones

User.hasMany(Adress, { as: "adress" });
Adress.belongsToMany(User, { through: "user_adress" });

User.belongsToMany(ProductsName, { through: "user_products_name_favorite" });
ProductsName.belongsToMany(User, { through: "user_products_name_favorite" });

User.hasMany(ShoppingCart, { as: "shoppingcart" });
ShoppingCart.belongsTo(User, { as: "user" });

ShoppingCart.belongsToMany(ProductsName, { through: "products_name_cart" });
ProductsName.belongsToMany(ShoppingCart, { through: "products_name_cart" });

ProductsName.hasMany(Review, { foreignKey: "products_name_id" });
Review.belongsTo(ProductsName, { foreignKey: "products_name_id" });

// order - user relations
User.hasMany(Order, {foreignKey: "userId"});
Order.belongsTo(User);
// order - product relations
Order.belongsToMany(ProductsName, {through: OrderDetail});
ProductsName.belongsToMany(Order, {through: OrderDetail});
// this is for better queries
Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);
ProductsName.hasMany(OrderDetail);
OrderDetail.belongsTo(ProductsName);

module.exports = {
    User: sequelize.models.User,
    ProductsName: sequelize.models.ProductsName,
    ShoppingCart: sequelize.models.ShoppingCart,
    Adress: sequelize.models.Address,
    Review: sequelize.models.Review,
    Order: sequelize.models.Order,
    OrderDetail: sequelize.models.OrderDetail,
    conn: sequelize,
};
