'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      models.Payment.belongsTo(models.Order, {
        foreignKey: 'orderId'
      })
    }
  }
  Payment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    orderId: {
      type: DataTypes.INTEGER
    },
    method: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
    holderName: {
      type: DataTypes.STRING,
    },
    outsideOrderId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};