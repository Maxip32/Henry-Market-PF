const {Sequelize, DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "order",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            orderAmount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            orderTotal: {
                type: DataTypes.FLOAT,
                allowNull: false,
            }
        },
        {
            timestamps: true
        }
    );
}