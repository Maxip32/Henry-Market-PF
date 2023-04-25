const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,// numeros enteros 
        allowNull: false,//unico id
        primaryKey: true,// cada registro tiene un valor nulo 
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      image: {
        type: DataTypes.TEXT,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      stock: {
        type: DataTypes.INTEGER,
        
      },
    },
    {
      timestamps: false, // no actualiza fecha y hora de creacion en la db
    }
  );
};
