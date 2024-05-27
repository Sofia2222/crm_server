'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        storageId: 1,
        userId: 1,
        contactId: 2,
        productsIds: [{productId: 1, amount: 2}, {productId: 2, amount: 1}],
        deliveryId: null,
        comment: 'Гарна заявка',
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 1,
        productsIds: [{productId: 1, amount: 1}],
        deliveryId: null,
        comment: 'Погана заявка',
        statusId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
