const {db} = require("../../database/models");

class ContactService {
    async getAll() {
        return await db().Contact.findAll();
    }
    async getById(id) {
        return await db().Contact.findOne({where: [{id: id}]});
    }
    async getByLimit({limit, offset}){
        return await db().Contact.findAll({limit: limit, offset: offset});
    }
    async create({firstName, lastName, middleName, phone, email, comment, storageId})
    {
        return await db().Contact.create(
            {firstName, lastName, middleName, phone, email, comment, storageId}
        );
    }
    async update({id, firstName, lastName, middleName, phone, email, comment, storageId}) {
        return await db().Contact.update(
            {firstName, lastName, middleName, phone, email, comment, storageId},
            {
                where: {id: id}
            }
        );
    }
    async delete(id){
        return await db().Contact.destroy(
            {where: [{id: id}]}
        );
    }
}

module.exports = new ContactService();
