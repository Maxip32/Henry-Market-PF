const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
	sequelize.define(
		"shoppingCart",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: Sequelize.UUIDV4,
        		allowNull: false,
				primaryKey: true,
			},
			listProducts: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			}
		},
		{
			timestamps: false,
		}
	);

};  
