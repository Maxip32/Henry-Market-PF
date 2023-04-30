
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('address', {
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
