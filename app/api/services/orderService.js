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
    async create({storageId, userId, contactId, productsId, comment})
    {
        return await db().Order.create(
            {storageId, userId, contactId, productsId, comment}
        );
    }
    async update({id, storageId, userId, contactId, productsId, comment}) {
        return await db().Order.update(
            {storageId, userId, contactId, productsId, comment},
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
}

module.exports = new OrderService();
