'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Verse 1',
        price: 123,
        firstCost: 50,
        comment: null,
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nexus 1',
        price: 523,
        firstCost: 100,
        comment: null,
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
