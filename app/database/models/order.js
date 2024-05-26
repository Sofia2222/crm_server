'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            models.Order.belongsTo(models.Storage, {
                foreignKey: 'storageId',
            });
            models.Order.belongsTo(models.User, {
                foreignKey: 'userId',
            });
            models.Order.belongsTo(models.Contact, {
                foreignKey: 'contactId',
            });
            models.Order.belongsTo(models.Delivery, {
                foreignKey: 'deliveryId',
            });
        }
    }
    //storageId, userId, contactId, productsId, comment
    Order.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            storageId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            contactId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            productsIds: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
            },
            deliveryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                allowNull: false,
                type: DataTypes.STRING,
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
            modelName: 'Order',
        },
    );
    return Order;
};
