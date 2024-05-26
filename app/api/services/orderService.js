const { db } = require('../../database/models');

class OrderService {
    async getAll() {
        return await db().Order.findAll();
    }
    async getById(id) {
        return await db().Order.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset }) {
        return await db().Order.findAll({ limit: limit, offset: offset });
    }
    async create({
        storageId,
        userId,
        contactId,
        productsId,
        deliveryId,
        comment,
        status,
    }) {
        return await db().Order.create({
            storageId,
            userId,
            contactId,
            productsId,
            deliveryId,
            comment,
            status,
        });
    }
    async update({
        storageId,
        userId,
        contactId,
        productsId,
        deliveryId,
        comment,
        status,
    }) {
        return await db().Order.update(
            {
                storageId,
                userId,
                contactId,
                productsId,
                deliveryId,
                comment,
                status,
            },
            {
                where: { id: id },
            },
        );
    }
    async delete(id) {
        return await db().Order.destroy({ where: [{ id: id }] });
    }

    async getTableOrders() {
        const result = [];
        const orders = await db().Order.findAll({
            include: [
                {
                    model: await db().Contact,
                    attributes: [
                        'firstName',
                        'lastName',
                        'middleName',
                        'email',
                    ],
                },
                {
                    model: await db().Delivery,
                    attributes: ['city', 'warehouse'],
                },
            ],
        });

        for (const order of orders) {
            const products = [];
            let totalSumOrder = 0;
            for (const id of order.dataValues.productsIds) {
                const product = await db().Product.findByPk(id, {
                    attributes: ['id', 'title', 'price'],
                });
                totalSumOrder += parseFloat(product.dataValues.price);
                products.push(product);
            }

            result.push({
                numberOrder: order.dataValues.id,
                createdAt: order.dataValues.createdAt,
                pib: `${order.dataValues.Contact.dataValues.firstName} ${order.dataValues.Contact.dataValues.lastName} ${order.dataValues.Contact.dataValues.middleName}`,
                products: products,
                status: order.dataValues.status,
                suma: totalSumOrder,
                delivery: `${order?.dataValues?.Delivery?.dataValues?.city}, ${order.dataValues.Delivery.dataValues.warehouse}`,
            });
        }
        return result;
    }
}

module.exports = new OrderService();
