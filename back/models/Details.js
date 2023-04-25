const { DataTypes, Sequelize } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Detail",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,// float valor decimal 
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
