'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Storage extends Model {
        static associate(models) {}
    }
    Storage.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            storageName: {
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
            modelName: 'Storage',
        },
    );
    return Storage;
};
