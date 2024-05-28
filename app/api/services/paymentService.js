const { db } = require('../../database/models');

class PaymentService {
    async getAll() {
        return await db().Payment.findAll();
    }
    async getById(id) {
        return await db().Payment.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset }) {
        return await db().Payment.findAll({ limit: limit, offset: offset });
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
        return await db().Payment.create({
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
        return await db().Payment.update(
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
        return await db().Payment.destroy({ where: [{ id: id }] });
    }
}

module.exports = new PaymentService();
