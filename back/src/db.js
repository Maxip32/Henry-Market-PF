require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henrymarket`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))

   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         (file !== basename) &&
         (file.slice(-3) === '.js')
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
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
const {

  Address,
  User,
  Product,
  ShoppingCart,
  Review
} = sequelize.models;

// Aca vendrian las relaciones

User.hasMany(Address);
Address.belongsTo(User);

User.belongsToMany(Product, { through: 'UserProductFavorite' });
Product.belongsToMany(User, { through: 'UserProductFavorite' });

User.hasMany(ShoppingCart)
ShoppingCart.belongsTo(User)

ShoppingCart.belongsToMany(Product, { through: "ProductCart" });
Product.belongsToMany(ShoppingCart, { through: "ProductCart" });

Product.hasMany(Review , { foreignKey: 'productId' })
Review.belongsTo(Product, { foreignKey: 'productId' })


module.exports = {
   Admin: sequelize.models.Admin,
   User: sequelize.models.User,
   Product: sequelize.models.Product,
   ShoppingCart: sequelize.models.ShoppingCart,
   Address: sequelize.models.Address, 
   Review: sequelize.models.Review, 
  conn: sequelize, 
};

