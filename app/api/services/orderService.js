const { db } = require('../../database/models');
const {Op, col, fn, where} = require("sequelize");

class OrderService {
    async getById(id) {
        return await db().Order.findOne({ where: [{ id: id }] });
    }
    async create({order, storageId}) {
        return await db().Order.create({order, storageId});
    }
    async update({id, params}) {
        return await db().Order.update({...params}, {where: { id: id }});
    }
    async delete(id) {
        return await db().Order.destroy({ where: [{ id: id }] });
    }
    async getAnalytics({from, to}) {
        const orders = await db().Order.findAll({
            include: [
                {
                    model: db().Product,
                    attributes: ['id', 'title', 'price']
                },
            ],
            attributes: [
                [fn('DATE', col('Order.createdAt')), 'date'],
                [fn('COUNT', col('Order.id')), 'orderCount']
            ],
            where: {
                createdAt: {
                    [Op.between]: [from, to]
                },
                statusId: '5'
            },
            group: ['date'],
            order: [[col('date'), 'ASC']]
        });
        console.log(orders)
    }
    async getTableOrders({limit=10, offset=0}) {
        const result = [];
        const orders = await db().Order.findAll({
            order: [['id', 'DESC'], ['createdAt', 'ASC']],
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
                    attributes: ['id', 'name', 'backgroundColor'],
                },
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
            const payments = await db().Payment.findAll({where: [{ orderId: order.id }]});
            let totalPayments = 0;
            console.log(payments[0]?.dataValues)
            for (const payment of payments) {
                totalPayments += parseFloat(payment?.dataValues?.amount);
            }
            result.push({
                id: order.id,
                numberOrder: order.dataValues.id,
                createdAt: order.dataValues.createdAt,
                pib: `${order.dataValues.Contact.dataValues.lastName} ${order.dataValues.Contact.dataValues.firstName} ${order.dataValues.Contact.dataValues.middleName}`,
                products: products,
                status: {
                    id: order.dataValues.Status.id,
                    name: order.dataValues.Status.name,
                    backgroundColor: order.dataValues.Status.backgroundColor,
                },
                suma: totalSumOrder,
                amountPayments: totalPayments,
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
