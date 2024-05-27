'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Statuses',
            [
                {
                    name: 'Новий',
                    positive: null,
                    backgroundColor: '#E7E7E7',
                    storageId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Відправлений',
                    positive: null,
                    backgroundColor: '#89BFFF',
                    storageId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Отриманий',
                    positive: null,
                    backgroundColor: '#E0ADFF',
                    storageId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Зібраний',
                    positive: null,
                    backgroundColor: '#A0FC7F',
                    storageId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Продаж',
                    positive: true,
                    backgroundColor: '#32a500',
                    storageId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Видалений',
                    positive: false,
                    backgroundColor: '#ff5656',
                    storageId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ]
        )
    },

    async down (queryInterface, Sequelize) {}
};
