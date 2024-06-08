'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Delivery extends Model {
        static associate(models) {}
    }
    Delivery.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            city: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            warehouse: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'Delivery',
        },
    );
    return Delivery;
};
