'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        storageId: 1,
        userId: 1,
        contactId: 12,
        deliveryId: 3,
        comment: 'Гарний клієнт',
        statusId: 5,
        createdAt: new Date('2024-05-01T10:00:00Z'),
        updatedAt: new Date('2024-05-01T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 8,
        deliveryId: 5,
        comment: 'Відмінний покупець',
        statusId: 3,
        createdAt: new Date('2024-05-01T12:00:00Z'),
        updatedAt: new Date('2024-05-01T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 20,
        deliveryId: 1,
        comment: 'Постійний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-02T09:00:00Z'),
        updatedAt: new Date('2024-05-02T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 3,
        deliveryId: 4,
        comment: 'Швидкий замовник',
        statusId: 2,
        createdAt: new Date('2024-05-02T11:00:00Z'),
        updatedAt: new Date('2024-05-02T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 7,
        deliveryId: 6,
        comment: 'Дуже задоволений',
        statusId: 6,
        createdAt: new Date('2024-05-03T14:00:00Z'),
        updatedAt: new Date('2024-05-03T14:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 14,
        deliveryId: 2,
        comment: 'Приємний клієнт',
        statusId: 4,
        createdAt: new Date('2024-05-03T16:00:00Z'),
        updatedAt: new Date('2024-05-03T16:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 9,
        deliveryId: 8,
        comment: 'Швидке обслуговування',
        statusId: 5,
        createdAt: new Date('2024-05-04T10:00:00Z'),
        updatedAt: new Date('2024-05-04T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 6,
        deliveryId: 7,
        comment: 'Низька ціна',
        statusId: 1,
        createdAt: new Date('2024-05-04T13:00:00Z'),
        updatedAt: new Date('2024-05-04T13:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 17,
        deliveryId: 3,
        comment: 'Гарний покупець',
        statusId: 2,
        createdAt: new Date('2024-05-05T15:00:00Z'),
        updatedAt: new Date('2024-05-05T15:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 4,
        deliveryId: 5,
        comment: 'Чудовий сервіс',
        statusId: 6,
        createdAt: new Date('2024-05-05T18:00:00Z'),
        updatedAt: new Date('2024-05-05T18:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 10,
        deliveryId: 2,
        comment: 'Швидка доставка',
        statusId: 4,
        createdAt: new Date('2024-05-06T09:00:00Z'),
        updatedAt: new Date('2024-05-06T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 15,
        deliveryId: 6,
        comment: 'Гарний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-06T12:00:00Z'),
        updatedAt: new Date('2024-05-06T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 13,
        deliveryId: 1,
        comment: 'Постійний клієнт',
        statusId: 2,
        createdAt: new Date('2024-05-07T11:00:00Z'),
        updatedAt: new Date('2024-05-07T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 18,
        deliveryId: 4,
        comment: 'Відмінний покупець',
        statusId: 3,
        createdAt: new Date('2024-05-07T14:00:00Z'),
        updatedAt: new Date('2024-05-07T14:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 5,
        deliveryId: 7,
        comment: 'Швидкий замовник',
        statusId: 5,
        createdAt: new Date('2024-05-08T10:00:00Z'),
        updatedAt: new Date('2024-05-08T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 11,
        deliveryId: 8,
        comment: 'Дуже задоволений',
        statusId: 6,
        createdAt: new Date('2024-05-08T13:00:00Z'),
        updatedAt: new Date('2024-05-08T13:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 2,
        deliveryId: 5,
        comment: 'Приємний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-09T09:00:00Z'),
        updatedAt: new Date('2024-05-09T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 16,
        deliveryId: 3,
        comment: 'Швидке обслуговування',
        statusId: 4,
        createdAt: new Date('2024-05-09T11:00:00Z'),
        updatedAt: new Date('2024-05-09T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 14,
        deliveryId: 2,
        comment: 'Низька ціна',
        statusId: 2,
        createdAt: new Date('2024-05-10T10:00:00Z'),
        updatedAt: new Date('2024-05-10T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 19,
        deliveryId: 6,
        comment: 'Гарний покупець',
        statusId: 5,
        createdAt: new Date('2024-05-10T12:00:00Z'),
        updatedAt: new Date('2024-05-10T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 5,
        deliveryId: 7,
        comment: 'Чудовий сервіс',
        statusId: 6,
        createdAt: new Date('2024-05-11T14:00:00Z'),
        updatedAt: new Date('2024-05-11T14:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 12,
        deliveryId: 4,
        comment: 'Швидка доставка',
        statusId: 4,
        createdAt: new Date('2024-05-11T16:00:00Z'),
        updatedAt: new Date('2024-05-11T16:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 9,
        deliveryId: 1,
        comment: 'Гарний клієнт',
        statusId: 3,
        createdAt: new Date('2024-05-12T10:00:00Z'),
        updatedAt: new Date('2024-05-12T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 4,
        deliveryId: 8,
        comment: 'Постійний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-12T12:00:00Z'),
        updatedAt: new Date('2024-05-12T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 18,
        deliveryId: 5,
        comment: 'Відмінний покупець',
        statusId: 6,
        createdAt: new Date('2024-05-13T14:00:00Z'),
        updatedAt: new Date('2024-05-13T14:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 7,
        deliveryId: 3,
        comment: 'Швидкий замовник',
        statusId: 2,
        createdAt: new Date('2024-05-13T16:00:00Z'),
        updatedAt: new Date('2024-05-13T16:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 15,
        deliveryId: 6,
        comment: 'Дуже задоволений',
        statusId: 5,
        createdAt: new Date('2024-05-14T10:00:00Z'),
        updatedAt: new Date('2024-05-14T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 16,
        deliveryId: 2,
        comment: 'Приємний клієнт',
        statusId: 3,
        createdAt: new Date('2024-05-14T12:00:00Z'),
        updatedAt: new Date('2024-05-14T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 11,
        deliveryId: 7,
        comment: 'Швидке обслуговування',
        statusId: 4,
        createdAt: new Date('2024-05-15T09:00:00Z'),
        updatedAt: new Date('2024-05-15T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 3,
        deliveryId: 1,
        comment: 'Низька ціна',
        statusId: 1,
        createdAt: new Date('2024-05-15T11:00:00Z'),
        updatedAt: new Date('2024-05-15T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 13,
        deliveryId: 6,
        comment: 'Висока якість',
        statusId: 5,
        createdAt: new Date('2024-05-16T10:00:00Z'),
        updatedAt: new Date('2024-05-16T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 10,
        deliveryId: 4,
        comment: 'Швидка доставка',
        statusId: 6,
        createdAt: new Date('2024-05-16T12:00:00Z'),
        updatedAt: new Date('2024-05-16T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 15,
        deliveryId: 2,
        comment: 'Гарний клієнт',
        statusId: 3,
        createdAt: new Date('2024-05-17T09:00:00Z'),
        updatedAt: new Date('2024-05-17T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 14,
        deliveryId: 5,
        comment: 'Постійний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-17T11:00:00Z'),
        updatedAt: new Date('2024-05-17T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 2,
        deliveryId: 8,
        comment: 'Чудовий сервіс',
        statusId: 2,
        createdAt: new Date('2024-05-18T10:00:00Z'),
        updatedAt: new Date('2024-05-18T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 4,
        deliveryId: 3,
        comment: 'Швидка відповідь',
        statusId: 4,
        createdAt: new Date('2024-05-18T12:00:00Z'),
        updatedAt: new Date('2024-05-18T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 17,
        deliveryId: 1,
        comment: 'Швидка доставка',
        statusId: 5,
        createdAt: new Date('2024-05-19T09:00:00Z'),
        updatedAt: new Date('2024-05-19T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 7,
        deliveryId: 5,
        comment: 'Відмінний покупець',
        statusId: 6,
        createdAt: new Date('2024-05-19T11:00:00Z'),
        updatedAt: new Date('2024-05-19T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 20,
        deliveryId: 4,
        comment: 'Постійний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-20T10:00:00Z'),
        updatedAt: new Date('2024-05-20T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 6,
        deliveryId: 2,
        comment: 'Швидка доставка',
        statusId: 2,
        createdAt: new Date('2024-05-20T12:00:00Z'),
        updatedAt: new Date('2024-05-20T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 19,
        deliveryId: 3,
        comment: 'Гарний клієнт',
        statusId: 5,
        createdAt: new Date('2024-05-21T09:00:00Z'),
        updatedAt: new Date('2024-05-21T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 11,
        deliveryId: 6,
        comment: 'Швидке обслуговування',
        statusId: 3,
        createdAt: new Date('2024-05-21T11:00:00Z'),
        updatedAt: new Date('2024-05-21T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 13,
        deliveryId: 7,
        comment: 'Чудовий сервіс',
        statusId: 2,
        createdAt: new Date('2024-05-22T10:00:00Z'),
        updatedAt: new Date('2024-05-22T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 5,
        deliveryId: 8,
        comment: 'Швидка відповідь',
        statusId: 4,
        createdAt: new Date('2024-05-22T12:00:00Z'),
        updatedAt: new Date('2024-05-22T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 9,
        deliveryId: 1,
        comment: 'Гарний клієнт',
        statusId: 6,
        createdAt: new Date('2024-05-23T09:00:00Z'),
        updatedAt: new Date('2024-05-23T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 16,
        deliveryId: 4,
        comment: 'Висока якість',
        statusId: 1,
        createdAt: new Date('2024-05-23T11:00:00Z'),
        updatedAt: new Date('2024-05-23T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 14,
        deliveryId: 6,
        comment: 'Швидка доставка',
        statusId: 5,
        createdAt: new Date('2024-05-24T10:00:00Z'),
        updatedAt: new Date('2024-05-24T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 15,
        deliveryId: 2,
        comment: 'Гарний покупець',
        statusId: 3,
        createdAt: new Date('2024-05-24T12:00:00Z'),
        updatedAt: new Date('2024-05-24T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 12,
        deliveryId: 3,
        comment: 'Постійний клієнт',
        statusId: 4,
        createdAt: new Date('2024-05-25T09:00:00Z'),
        updatedAt: new Date('2024-05-25T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 7,
        deliveryId: 8,
        comment: 'Чудовий сервіс',
        statusId: 2,
        createdAt: new Date('2024-05-25T11:00:00Z'),
        updatedAt: new Date('2024-05-25T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 4,
        deliveryId: 5,
        comment: 'Швидка відповідь',
        statusId: 1,
        createdAt: new Date('2024-05-26T10:00:00Z'),
        updatedAt: new Date('2024-05-26T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 20,
        deliveryId: 3,
        comment: 'Гарний клієнт',
        statusId: 6,
        createdAt: new Date('2024-05-26T12:00:00Z'),
        updatedAt: new Date('2024-05-26T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 18,
        deliveryId: 1,
        comment: 'Швидка доставка',
        statusId: 3,
        createdAt: new Date('2024-05-27T09:00:00Z'),
        updatedAt: new Date('2024-05-27T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 19,
        deliveryId: 7,
        comment: 'Відмінний покупець',
        statusId: 4,
        createdAt: new Date('2024-05-27T11:00:00Z'),
        updatedAt: new Date('2024-05-27T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 16,
        deliveryId: 4,
        comment: 'Швидка відповідь',
        statusId: 2,
        createdAt: new Date('2024-05-28T10:00:00Z'),
        updatedAt: new Date('2024-05-28T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 11,
        deliveryId: 5,
        comment: 'Постійний клієнт',
        statusId: 1,
        createdAt: new Date('2024-05-28T12:00:00Z'),
        updatedAt: new Date('2024-05-28T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 3,
        deliveryId: 6,
        comment: 'Гарний покупець',
        statusId: 5,
        createdAt: new Date('2024-05-29T09:00:00Z'),
        updatedAt: new Date('2024-05-29T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 5,
        deliveryId: 2,
        comment: 'Відмінний покупець',
        statusId: 6,
        createdAt: new Date('2024-05-29T11:00:00Z'),
        updatedAt: new Date('2024-05-29T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 13,
        deliveryId: 8,
        comment: 'Швидка доставка',
        statusId: 3,
        createdAt: new Date('2024-05-30T10:00:00Z'),
        updatedAt: new Date('2024-05-30T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 12,
        deliveryId: 1,
        comment: 'Швидка відповідь',
        statusId: 4,
        createdAt: new Date('2024-05-30T12:00:00Z'),
        updatedAt: new Date('2024-05-30T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 10,
        deliveryId: 4,
        comment: 'Гарний клієнт',
        statusId: 5,
        createdAt: new Date('2024-05-31T09:00:00Z'),
        updatedAt: new Date('2024-05-31T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 7,
        deliveryId: 3,
        comment: 'Чудовий сервіс',
        statusId: 6,
        createdAt: new Date('2024-05-31T11:00:00Z'),
        updatedAt: new Date('2024-05-31T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 14,
        deliveryId: 6,
        comment: 'Швидка відповідь',
        statusId: 2,
        createdAt: new Date('2024-06-01T10:00:00Z'),
        updatedAt: new Date('2024-06-01T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 17,
        deliveryId: 2,
        comment: 'Відмінний покупець',
        statusId: 4,
        createdAt: new Date('2024-06-01T12:00:00Z'),
        updatedAt: new Date('2024-06-01T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 8,
        deliveryId: 1,
        comment: 'Постійний клієнт',
        statusId: 3,
        createdAt: new Date('2024-06-02T09:00:00Z'),
        updatedAt: new Date('2024-06-02T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 19,
        deliveryId: 7,
        comment: 'Швидке обслуговування',
        statusId: 1,
        createdAt: new Date('2024-06-02T11:00:00Z'),
        updatedAt: new Date('2024-06-02T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 2,
        deliveryId: 5,
        comment: 'Гарний покупець',
        statusId: 5,
        createdAt: new Date('2024-06-03T10:00:00Z'),
        updatedAt: new Date('2024-06-03T10:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 13,
        deliveryId: 8,
        comment: 'Швидка доставка',
        statusId: 6,
        createdAt: new Date('2024-06-03T12:00:00Z'),
        updatedAt: new Date('2024-06-03T12:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 10,
        deliveryId: 3,
        comment: 'Швидка відповідь',
        statusId: 4,
        createdAt: new Date('2024-06-04T09:00:00Z'),
        updatedAt: new Date('2024-06-04T09:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 17,
        deliveryId: 1,
        comment: 'Чудовий сервіс',
        statusId: 3,
        createdAt: new Date('2024-06-04T11:00:00Z'),
        updatedAt: new Date('2024-06-04T11:00:00Z')
      },
      {
        storageId: 1,
        userId: 1,
        contactId: 6,
        deliveryId: 7,
        comment: 'Відмінний покупець',
        statusId: 2,
        createdAt: new Date('2024-06-04T12:00:00Z'),
        updatedAt: new Date('2024-06-04T12:00:00Z')
      }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
