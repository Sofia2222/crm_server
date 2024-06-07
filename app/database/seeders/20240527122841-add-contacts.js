'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        firstName: 'Сергій',
        lastName: 'Савченко',
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
        phone: '+380990652784',
        email: 'sofiaharchenko@gmail.com',
        comment: 'Гарний покупець',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Дмитро',
        lastName: 'Касель',
        middleName: 'Іванович',
        phone: '+380990340204',
        email: 'дмитро@gmail.com',
        comment: 'Поганий покупець',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Іван',
        lastName: 'Іванов',
        middleName: 'Іванович',
        phone: '+380990230604',
        email: 'іван@gmail.com',
        comment: 'Класний покупець',
        storageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
