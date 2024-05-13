'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
        models.Storage.hasMany(models.Product, {
            foreignKey: 'storageId',
            as: 'storages_products'
        })
    }

  }
  Product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    titleForDocuments: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    },
    firstCost: {
      type: DataTypes.STRING
    },
    sale: {
      type: DataTypes.STRING
    },
    dateSale: {
      type: DataTypes.DATE
    },
    comment: {
      type: DataTypes.STRING
    },
    categories: {
      type: DataTypes.STRING
    },
    storageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'Product',
  });
  return Product;
};