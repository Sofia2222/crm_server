const { db } = require('../../database/models');

class StatusService {
    async getAll() {
        return await db().Status.findAll();
    }
    async getById(id) {
        return await db().Status.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset }) {
        return await db().Status.findAll({ limit: limit, offset: offset });
    }
    async create({
                     firstName,
                     lastName,
                     middleName,
                     phone,
                     email,
                     comment,
                     storageId,
                 }) {
        return await db().Status.create({
            firstName,
            lastName,
            middleName,
            phone,
            email,
            comment,
            storageId,
        });
    }
    async update({
                     id,
                     firstName,
                     lastName,
                     middleName,
                     phone,
                     email,
                     comment,
                     storageId,
                 }) {
        return await db().Status.update(
            {
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId,
            },
            {
                where: { id: id },
            },
        );
    }
    async delete(id) {
        return await db().Status.destroy({ where: [{ id: id }] });
    }
}

module.exports = new StatusService();
