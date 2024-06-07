const { db } = require('../../database/models');

class PaymentService {

    async getById(id) {
        return await db().Payment.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset }) {
        const result = await db().Payment.findAll({ limit: limit, offset: offset, order: [['createdAt', 'DESC']]});
        return {
            data: result,
            meta: {
                allCount: await this.getCount(),
                countOnPage: result.length,
            }
        };
    }
    async create({payment, storageId}) {
        console.log(payment)
        return await db().Payment.create({
            ...payment,
            storageId,
        });
    }
    async update({id, payment, storageId,}) {
        return await db().Payment.update(
            {
                ...payment,
                storageId,
            },
            {
                where: { id: id },
            },
        );
    }
    async delete(id) {
        return await db().Payment.destroy({ where: [{ id: id }] });
    }
    async getCount(){
        return await db().Payment.count();
    }
}

module.exports = new PaymentService();
