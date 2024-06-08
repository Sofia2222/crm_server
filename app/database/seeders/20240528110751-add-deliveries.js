'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Deliveries', [
     {
       city: 'Київ',
       warehouse: '70',
       createdAt: new Date('2024-06-01T10:00:00Z'),
       updatedAt: new Date('2024-06-01T10:00:00Z')
     },
     {
       city: 'Львів',
       warehouse: '15',
       createdAt: new Date('2024-06-02T11:00:00Z'),
       updatedAt: new Date('2024-06-02T11:00:00Z')
     },
     {
       city: 'Одеса',
       warehouse: '25',
       createdAt: new Date('2024-06-03T12:00:00Z'),
       updatedAt: new Date('2024-06-03T12:00:00Z')
     },
     {
       city: 'Харків',
       warehouse: '40',
       createdAt: new Date('2024-06-04T13:00:00Z'),
       updatedAt: new Date('2024-06-04T13:00:00Z')
     },
     {
       city: 'Дніпро',
       warehouse: '50',
       createdAt: new Date('2024-06-05T14:00:00Z'),
       updatedAt: new Date('2024-06-05T14:00:00Z')
     },
     {
       city: 'Запоріжжя',
       warehouse: '30',
       createdAt: new Date('2024-06-06T15:00:00Z'),
       updatedAt: new Date('2024-06-06T15:00:00Z')
     },
     {
       city: 'Вінниця',
       warehouse: '20',
       createdAt: new Date('2024-06-07T16:00:00Z'),
       updatedAt: new Date('2024-06-07T16:00:00Z')
     },
     {
       city: 'Полтава',
       warehouse: '35',
       createdAt: new Date('2024-06-08T17:00:00Z'),
       updatedAt: new Date('2024-06-08T17:00:00Z')
     }
   ])
  },

  async down (queryInterface, Sequelize) {}
};
