const {Sequelize, DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "orderDetail",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            detailAmount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            detailTotal: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
}