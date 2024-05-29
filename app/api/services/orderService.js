const { db } = require('../../database/models');

class OrderService {
    async getById(id) {
        return await db().Order.findOne({ where: [{ id: id }] });
    }
    async create({storageId, userId, contactId, productsId, deliveryId, comment, status,}) {
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
    async update({storageId, userId, contactId, productsId, deliveryId, comment, status,}) {
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
    async getTableOrders({limit=10, offset=0}) {
        const result = [];
        const orders = await db().Order.findAll({
            include: [
                {
                    model: db().Contact,
                    attributes: [
                        'firstName',
                        'lastName',
                        'middleName',
                        'email',
                    ],
                },
                {
                    model: db().Delivery,
                    attributes: ['city', 'warehouse'],
                },
                {
                    model: db().Product,
                    attributes: ['id', 'title', 'price']
                },
                {
                    model: db().Status,
                    attributes: ['name', 'backgroundColor'],
                }
            ],
            limit: limit,
            offset: offset
        });


        for (const order of orders) {
            const products = [];
            let totalSumOrder = 0;
            for (const product of order.dataValues.Products) {
                products.push(product.dataValues);
                totalSumOrder += (parseFloat(product.dataValues.price || 0)*parseFloat(product.OrderRefProduct.amount));
            }

            result.push({
                id: order.id,
                numberOrder: order.dataValues.id,
                createdAt: order.dataValues.createdAt,
                pib: `${order.dataValues.Contact.dataValues.firstName} ${order.dataValues.Contact.dataValues.lastName} ${order.dataValues.Contact.dataValues.middleName}`,
                products: products,
                status: {
                    name: order.dataValues.Status.name,
                    backgroundColor: order.dataValues.Status.backgroundColor,
                },
                suma: totalSumOrder,
                paymentSuma: 0,
                delivery: order?.dataValues?.Delivery === null ? null : `${order?.dataValues?.Delivery?.dataValues?.city}, ${order?.dataValues?.Delivery?.dataValues?.warehouse}`,
            });
        }
        return {
            data: result,
            meta: {
                allCount: await this.getCount(),
                countOnPage: result.length,
            }
        };
    }
    async getCount(){
        return await db().Order.count();
    }
}

module.exports = new OrderService();
