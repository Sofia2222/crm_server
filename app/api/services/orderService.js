const {db} = require("../../database/models");

class OrderService {
    async getAll() {
        return await db().Order.findAll();
    }
    async getById(id) {
        return await db().Order.findOne({where: [{id: id}]});
    }
    async getByLimit({limit, offset}){
        return await db().Order.findAll({limit: limit, offset: offset});
    }
    async create({storageId, userId, contactId, productsId, deliveryId, comment, status})
    {
        return await db().Order.create(
            {storageId, userId, contactId, productsId, deliveryId, comment, status}
        );
    }
    async update({storageId, userId, contactId, productsId, deliveryId, comment, status}) {
        return await db().Order.update(
            {storageId, userId, contactId, productsId, deliveryId, comment, status},
            {
                where: {id: id}
            }
        );
    }
    async delete(id){
        return await db().Order.destroy(
            {where: [{id: id}]}
        );
    }

    async getTableOrders(){

        const result = []
        const orders = await db().Order.findAll({
            include: [
                {
                    model: await db().Contact,
                    attributes: ['firstName', 'lastName', 'middleName', 'email'],
                },
                {
                    model: await db().Delivery,
                    attributes: ['city', 'warehouse'],
                }
            ]
        })
        //TODO:
        console.log(orders[0].dataValues.Contact.dataValues)
        console.log(orders[0].dataValues.Delivery.dataValues)

        for(const order of orders){
            console.log(order)
            result.push({
                numberOrder: order.dataValues.id,
                createdAt: order.dataValues.createdAt,
                pib: `${order.dataValues.Contact.dataValues.firstName} ${order.dataValues.Contact.dataValues.lastName} ${order.dataValues.Contact.dataValues.middleName}`,
                products: {},
                status: order.dataValues.status,
                suma: '',
                delivery: `${order?.dataValues?.Delivery?.dataValues?.city} ${order.dataValues.Delivery.dataValues.warehouse}`,
            });
        }
        return result;
    }
}

module.exports = new OrderService();
