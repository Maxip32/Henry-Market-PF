const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
