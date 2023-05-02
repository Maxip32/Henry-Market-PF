const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
	sequelize.define(
		'review', 
		{
			id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			body: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			rating: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
    {
      timestamps: false,
    }
	);

};