'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        firstName: 'Джон',
        lastName: 'Дой',
        middleName: 'Васільйович',
        phone: '+380954738475',
        email: 'doi@gmail.com',
        comment: 'Гарний покупець',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Андрій',
        lastName: 'Мучак',
        middleName: 'Іванович',
        phone: '+380739384738',
        email: 'muchak@gmail.com',
        comment: 'Поганий покупець',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Софія',
        lastName: 'Харченко',
        middleName: 'Дмитрівна',
        phone: '+380990350704',
        email: 'sofiaharchenko228@gmail.com',
        comment: 'Класний покупець',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
