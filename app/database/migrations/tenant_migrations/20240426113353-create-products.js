'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      titleForDocuments: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      firstCost: {
        type: Sequelize.STRING
      },
      sale: {
        type: Sequelize.STRING
      },
      dateSale: {
        type: Sequelize.DATE
      },
      comment: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.STRING
      },
      storageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};