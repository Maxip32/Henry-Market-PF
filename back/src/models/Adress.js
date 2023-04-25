const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Adress = sequelize.define('adress', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
   },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
   },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
   },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
   },
  },
  { timestamps: false }
  );
};