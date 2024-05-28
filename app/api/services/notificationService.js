const { db } = require('../../database/models');

class NotificationService {
    async getAll() {
        return await db().Notification.findAll();
    }
    async getById(id) {
        return await db().Notification.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset }) {
        return await db().Notification.findAll({ limit: limit, offset: offset });
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
        return await db().Notification.create({
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
        return await db().Notification.update(
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
        return await db().Notification.destroy({ where: [{ id: id }] });
    }
}

module.exports = new NotificationService();
