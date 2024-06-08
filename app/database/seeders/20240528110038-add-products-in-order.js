'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrdersRefProducts', [
      { orderId: 1, productId: 5, amount: 2, createdAt: new Date('2024-05-01T10:00:00Z'), updatedAt: new Date('2024-05-01T10:00:00Z') },
      { orderId: 1, productId: 12, amount: 1, createdAt: new Date('2024-05-01T10:00:00Z'), updatedAt: new Date('2024-05-01T10:00:00Z') },
      { orderId: 2, productId: 3, amount: 3, createdAt: new Date('2024-05-02T11:00:00Z'), updatedAt: new Date('2024-05-02T11:00:00Z') },
      { orderId: 3, productId: 7, amount: 2, createdAt: new Date('2024-05-03T12:00:00Z'), updatedAt: new Date('2024-05-03T12:00:00Z') },
      { orderId: 4, productId: 2, amount: 1, createdAt: new Date('2024-05-04T13:00:00Z'), updatedAt: new Date('2024-05-04T13:00:00Z') },
      { orderId: 5, productId: 4, amount: 4, createdAt: new Date('2024-05-05T14:00:00Z'), updatedAt: new Date('2024-05-05T14:00:00Z') },
      { orderId: 5, productId: 9, amount: 2, createdAt: new Date('2024-05-05T14:00:00Z'), updatedAt: new Date('2024-05-05T14:00:00Z') },
      { orderId: 6, productId: 6, amount: 1, createdAt: new Date('2024-05-06T15:00:00Z'), updatedAt: new Date('2024-05-06T15:00:00Z') },
      { orderId: 7, productId: 1, amount: 3, createdAt: new Date('2024-05-07T16:00:00Z'), updatedAt: new Date('2024-05-07T16:00:00Z') },
      { orderId: 8, productId: 10, amount: 2, createdAt: new Date('2024-05-08T17:00:00Z'), updatedAt: new Date('2024-05-08T17:00:00Z') },
      { orderId: 9, productId: 8, amount: 1, createdAt: new Date('2024-05-09T18:00:00Z'), updatedAt: new Date('2024-05-09T18:00:00Z') },
      { orderId: 10, productId: 13, amount: 3, createdAt: new Date('2024-05-10T09:00:00Z'), updatedAt: new Date('2024-05-10T09:00:00Z') },
      { orderId: 11, productId: 14, amount: 2, createdAt: new Date('2024-05-11T10:00:00Z'), updatedAt: new Date('2024-05-11T10:00:00Z') },
      { orderId: 12, productId: 5, amount: 1, createdAt: new Date('2024-05-12T11:00:00Z'), updatedAt: new Date('2024-05-12T11:00:00Z') },
      { orderId: 12, productId: 7, amount: 2, createdAt: new Date('2024-05-12T11:00:00Z'), updatedAt: new Date('2024-05-12T11:00:00Z') },
      { orderId: 13, productId: 9, amount: 3, createdAt: new Date('2024-05-13T12:00:00Z'), updatedAt: new Date('2024-05-13T12:00:00Z') },
      { orderId: 14, productId: 12, amount: 1, createdAt: new Date('2024-05-14T13:00:00Z'), updatedAt: new Date('2024-05-14T13:00:00Z') },
      { orderId: 15, productId: 15, amount: 2, createdAt: new Date('2024-05-15T14:00:00Z'), updatedAt: new Date('2024-05-15T14:00:00Z') },
      { orderId: 15, productId: 18, amount: 1, createdAt: new Date('2024-05-15T14:00:00Z'), updatedAt: new Date('2024-05-15T14:00:00Z') },
      { orderId: 16, productId: 2, amount: 4, createdAt: new Date('2024-05-16T15:00:00Z'), updatedAt: new Date('2024-05-16T15:00:00Z') },
      { orderId: 17, productId: 4, amount: 3, createdAt: new Date('2024-05-17T16:00:00Z'), updatedAt: new Date('2024-05-17T16:00:00Z') },
      { orderId: 18, productId: 6, amount: 2, createdAt: new Date('2024-05-18T17:00:00Z'), updatedAt: new Date('2024-05-18T17:00:00Z') },
      { orderId: 19, productId: 8, amount: 1, createdAt: new Date('2024-05-19T18:00:00Z'), updatedAt: new Date('2024-05-19T18:00:00Z') },
      { orderId: 19, productId: 10, amount: 2, createdAt: new Date('2024-05-19T18:00:00Z'), updatedAt: new Date('2024-05-19T18:00:00Z') },
      { orderId: 20, productId: 13, amount: 1, createdAt: new Date('2024-05-20T09:00:00Z'), updatedAt: new Date('2024-05-20T09:00:00Z') },
      { orderId: 21, productId: 15, amount: 3, createdAt: new Date('2024-05-21T10:00:00Z'), updatedAt: new Date('2024-05-21T10:00:00Z') },
      { orderId: 22, productId: 17, amount: 2, createdAt: new Date('2024-05-22T11:00:00Z'), updatedAt: new Date('2024-05-22T11:00:00Z') },
      { orderId: 23, productId: 19, amount: 1, createdAt: new Date('2024-05-23T12:00:00Z'), updatedAt: new Date('2024-05-23T12:00:00Z') },
      { orderId: 24, productId: 11, amount: 3, createdAt: new Date('2024-05-24T13:00:00Z'), updatedAt: new Date('2024-05-24T13:00:00Z') },
      { orderId: 24, productId: 14, amount: 2, createdAt: new Date('2024-05-24T13:00:00Z'), updatedAt: new Date('2024-05-24T13:00:00Z') },
      { orderId: 25, productId: 16, amount: 1, createdAt: new Date('2024-05-25T14:00:00Z'), updatedAt: new Date('2024-05-25T14:00:00Z') },
      { orderId: 26, productId: 18, amount: 2, createdAt: new Date('2024-05-26T15:00:00Z'), updatedAt: new Date('2024-05-26T15:00:00Z') },
      { orderId: 27, productId: 1, amount: 4, createdAt: new Date('2024-05-27T16:00:00Z'), updatedAt: new Date('2024-05-27T16:00:00Z') },
      { orderId: 28, productId: 3, amount: 3, createdAt: new Date('2024-05-28T17:00:00Z'), updatedAt: new Date('2024-05-28T17:00:00Z') },
      { orderId: 28, productId: 5, amount: 2, createdAt: new Date('2024-05-28T17:00:00Z'), updatedAt: new Date('2024-05-28T17:00:00Z') },
      { orderId: 29, productId: 7, amount: 1, createdAt: new Date('2024-05-29T18:00:00Z'), updatedAt: new Date('2024-05-29T18:00:00Z') },
      { orderId: 30, productId: 9, amount: 2, createdAt: new Date('2024-05-30T09:00:00Z'), updatedAt: new Date('2024-05-30T09:00:00Z') },
      { orderId: 31, productId: 11, amount: 3, createdAt: new Date('2024-05-31T10:00:00Z'), updatedAt: new Date('2024-05-31T10:00:00Z') },
      { orderId: 32, productId: 13, amount: 1, createdAt: new Date('2024-06-01T11:00:00Z'), updatedAt: new Date('2024-06-01T11:00:00Z') },
      { orderId: 33, productId: 15, amount: 2, createdAt: new Date('2024-06-02T12:00:00Z'), updatedAt: new Date('2024-06-02T12:00:00Z') },
      { orderId: 34, productId: 17, amount: 3, createdAt: new Date('2024-06-03T13:00:00Z'), updatedAt: new Date('2024-06-03T13:00:00Z') },
      { orderId: 35, productId: 19, amount: 2, createdAt: new Date('2024-06-04T14:00:00Z'), updatedAt: new Date('2024-06-04T14:00:00Z') },
      { orderId: 36, productId: 2, amount: 1, createdAt: new Date('2024-06-05T15:00:00Z'), updatedAt: new Date('2024-06-05T15:00:00Z') },
      { orderId: 36, productId: 4, amount: 4, createdAt: new Date('2024-06-05T15:00:00Z'), updatedAt: new Date('2024-06-05T15:00:00Z') },
      { orderId: 37, productId: 6, amount: 3, createdAt: new Date('2024-06-06T16:00:00Z'), updatedAt: new Date('2024-06-06T16:00:00Z') },
      { orderId: 38, productId: 8, amount: 2, createdAt: new Date('2024-06-07T17:00:00Z'), updatedAt: new Date('2024-06-07T17:00:00Z') },
      { orderId: 39, productId: 10, amount: 1, createdAt: new Date('2024-06-08T18:00:00Z'), updatedAt: new Date('2024-06-08T18:00:00Z') },
      { orderId: 40, productId: 12, amount: 2, createdAt: new Date('2024-06-09T09:00:00Z'), updatedAt: new Date('2024-06-09T09:00:00Z') }
    ])
  },

  async down (queryInterface, Sequelize) {}
};
