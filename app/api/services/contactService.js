const { db } = require('../../database/models');

class ContactService {
    async getById(id) {
        return await db().Contact.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset}) {
        const result = await db().Contact.findAll({ limit: limit, offset: offset, order: [['createdAt', 'DESC']]});
        return {
            data: result,
            meta: {
                allCount: await this.getCount(),
                countOnPage: result.length,
            }
        };
    }
    async create({contact, storageId}) {
        return await db().Contact.create({...contact, storageId});
    }
    async update({id, contact}) {
        return await db().Contact.update(
            {
                ...contact
            },
            {
                where: { id: id },
            },
        );
    }
    async delete(id) {
        return await db().Contact.destroy({ where: [{ id: id }] });
    }
    async getCount(){
        return await db().Contact.count();
    }
}

module.exports = new ContactService();
