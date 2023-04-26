
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
   sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
   },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
   },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
   },
  },
  { timestamps: false }

  );
};
