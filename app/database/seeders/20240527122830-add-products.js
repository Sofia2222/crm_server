'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Eagle Vision',
        price: 123,
        firstCost: 50,
        comment: 'Гарні окуляри',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-06-01T10:00:00Z'),
        updatedAt: new Date('2024-06-01T10:00:00Z')
      },
      {
        title: 'Crystal Clear',
        price: 150,
        firstCost: 60,
        comment: 'Окуляри для читання',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-06-02T10:00:00Z'),
        updatedAt: new Date('2024-06-02T10:00:00Z')
      },
      {
        title: 'Sunshine Bliss',
        price: 200,
        firstCost: 80,
        comment: 'Сонцезахисні окуляри',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-06-03T10:00:00Z'),
        updatedAt: new Date('2024-06-03T10:00:00Z')
      },
      {
        title: 'TechGuard',
        price: 175,
        firstCost: 70,
        comment: 'Окуляри для роботи за комп\'ютером',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-06-04T10:00:00Z'),
        updatedAt: new Date('2024-06-04T10:00:00Z')
      },
      {
        title: 'Road Warrior',
        price: 250,
        firstCost: 100,
        comment: 'Окуляри для водіння',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-06-05T10:00:00Z'),
        updatedAt: new Date('2024-06-05T10:00:00Z')
      },
      {
        title: 'Fashionista Shades',
        price: 300,
        firstCost: 120,
        comment: 'Модні сонцезахисні окуляри',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-05-01T10:00:00Z'),
        updatedAt: new Date('2024-05-01T10:00:00Z')
      },
      {
        title: 'Night Rider',
        price: 220,
        firstCost: 90,
        comment: 'Окуляри для нічного водіння',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-05-02T10:00:00Z'),
        updatedAt: new Date('2024-05-02T10:00:00Z')
      },
      {
        title: 'Blue Shield',
        price: 180,
        firstCost: 75,
        comment: 'Окуляри з захистом від синього світла',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-05-03T10:00:00Z'),
        updatedAt: new Date('2024-05-03T10:00:00Z')
      },
      {
        title: 'SportFlex',
        price: 210,
        firstCost: 85,
        comment: 'Спортивні сонцезахисні окуляри',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-05-04T10:00:00Z'),
        updatedAt: new Date('2024-05-04T10:00:00Z')
      },
      {
        title: 'UltraLite Vision',
        price: 130,
        firstCost: 55,
        comment: 'Легкі окуляри для щоденного носіння',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-05-05T10:00:00Z'),
        updatedAt: new Date('2024-05-05T10:00:00Z')
      },
      {
        title: 'Luxury Shades',
        price: 400,
        firstCost: 160,
        comment: 'Розкішні сонцезахисні окуляри',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-05-06T10:00:00Z'),
        updatedAt: new Date('2024-05-06T10:00:00Z')
      },
      {
        title: 'Kids SafeVision',
        price: 90,
        firstCost: 35,
        comment: 'Дитячі окуляри для зору',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-01T10:00:00Z'),
        updatedAt: new Date('2024-04-01T10:00:00Z')
      },
      {
        title: 'Elegance Frames',
        price: 350,
        firstCost: 140,
        comment: 'Елегантні окуляри для зору',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-02T10:00:00Z'),
        updatedAt: new Date('2024-04-02T10:00:00Z')
      },
      {
        title: 'Classic Look',
        price: 170,
        firstCost: 70,
        comment: 'Класичні окуляри для зору',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-03T10:00:00Z'),
        updatedAt: new Date('2024-04-03T10:00:00Z')
      },
      {
        title: 'Aviator Shades',
        price: 220,
        firstCost: 90,
        comment: 'Авіаторські сонцезахисні окуляри',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-04-04T10:00:00Z'),
        updatedAt: new Date('2024-04-04T10:00:00Z')
      },
      {
        title: 'Retro Chic',
        price: 190,
        firstCost: 75,
        comment: 'Ретро окуляри для зору',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-05T10:00:00Z'),
        updatedAt: new Date('2024-04-05T10:00:00Z')
      },
      {
        title: 'Bold Vision',
        price: 250,
        firstCost: 100,
        comment: 'Сміливі сонцезахисні окуляри',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-04-06T10:00:00Z'),
        updatedAt: new Date('2024-04-06T10:00:00Z')
      },
      {
        title: 'Modern Frames',
        price: 180,
        firstCost: 75,
        comment: 'Сучасні окуляри для зору',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-07T10:00:00Z'),
        updatedAt: new Date('2024-04-07T10:00:00Z')
      },
      {
        title: 'Urban Explorer',
        price: 200,
        firstCost: 80,
        comment: 'Окуляри для активного відпочинку',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-08T10:00:00Z'),
        updatedAt: new Date('2024-04-08T10:00:00Z')
      },
      {
        title: 'Sunset Shades',
        price: 210,
        firstCost: 85,
        comment: 'Окуляри для захисту від сонця',
        categories: 'Сонцезахисні окуляри',
        storageId: 1,
        createdAt: new Date('2024-04-09T10:00:00Z'),
        updatedAt: new Date('2024-04-09T10:00:00Z')
      },
      {
        title: 'Vintage Frames',
        price: 230,
        firstCost: 95,
        comment: 'Вінтажні окуляри для зору',
        categories: 'Окуляри для зору',
        storageId: 1,
        createdAt: new Date('2024-04-10T10:00:00Z'),
        updatedAt: new Date('2024-04-10T10:00:00Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
