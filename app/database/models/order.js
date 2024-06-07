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
            models.Order.belongsTo(models.Status, {
                foreignKey: 'statusId',
            })
            models.Order.belongsToMany(models.Product, {
                through: models.OrderRefProduct,
                foreignKey: 'orderId',
                otherKey: 'productId',
            })
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
            amountPayments: {
                type: DataTypes.DECIMAL,
            },
            deliveryId: {
                type: DataTypes.INTEGER,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            statusId: {
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
            modelName: 'Order',
        },
    );
    return Order;
};
