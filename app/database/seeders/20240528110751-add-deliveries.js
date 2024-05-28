'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Deliveries', [
     {
       integrationId: 1,
       city: 'Київ',
       warehouse: '70',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  async down (queryInterface, Sequelize) {}
};
