'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Verse 1',
        titleForDocuments: 'Verse 1 for docs',
        price: 123,
        firstCost: 50,
        sale: null,
        dateSale: null,
        comment: null,
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nexus 1',
        titleForDocuments: 'Nexus 1 for docs',
        price: 523,
        firstCost: 100,
        sale: 70,
        dateSale: '05.06.2024',
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
