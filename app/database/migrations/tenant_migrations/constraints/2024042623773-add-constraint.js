'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('Users', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'storages_users',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Contacts', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'storages_contacts',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Tokens', {
            fields: ['userId'],
            type: 'foreign key',
            name: 'users_tokens',
            references: { table: 'Users', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Products', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'storages_products',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Integrations', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'storages_integrations',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Orders', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'storages_orders',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Orders', {
            fields: ['userId'],
            type: 'foreign key',
            name: 'orders_users',
            references: { table: 'Users', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Orders', {
            fields: ['contactId'],
            type: 'foreign key',
            name: 'orders_contacts',
            references: { table: 'Contacts', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Orders', {
            fields: ['deliveryId'],
            type: 'foreign key',
            name: 'orders_deliveries',
            references: { table: 'Deliveries', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });

        await queryInterface.addConstraint('Orders', {
            fields: ['statusId'],
            type: 'foreign key',
            name: 'orders_status',
            references: { table: 'Statuses', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Deliveries', {
            fields: ['integrationId'],
            type: 'foreign key',
            name: 'deliveries_integrations',
            references: { table: 'Integrations', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Statuses', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'statuses_storage',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Payments', {
            fields: ['orderId'],
            type: 'foreign key',
            name: 'payments_orders',
            references: { table: 'Orders', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('Notifications', {
            fields: ['storageId'],
            type: 'foreign key',
            name: 'notifications_storages',
            references: { table: 'Storages', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('OrdersRefProducts', {
            fields: ['orderId'],
            type: 'foreign key',
            name: 'orders_products',
            references: { table: 'Orders', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
        await queryInterface.addConstraint('OrdersRefProducts', {
            fields: ['productId'],
            type: 'foreign key',
            name: 'products_orders',
            references: { table: 'Products', field: 'id' },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },
};
