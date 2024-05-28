const notificationService = require('../services/statusService');
const { Conflict } = require('../utils/Errors');

class NotificationController {
    async getNotifications(req, res) {
        try {
            const notification = await notificationService.getAll();
            return res.status(200).json({ notification });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getNotificationById(req, res) {
        try {
            const { id } = req.params;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const notification = await notificationService.getById(id);
            return res.status(200).json({ notification: notification || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createNotification(req, res) {
        try {
            const userPayload = req.userPayload;
            const { firstName, lastName, middleName, phone, email, comment } =
                req.body;

            const notification = await notificationService.create({
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: storage
            return res.status(200).json({ notification });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateNotification(req, res) {
        try {
            const userPayload = req.userPayload;
            const {
                id,
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
            } = req.body;

            const notification = await notificationService.update({
                id,
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: from payload

            return res.status(200).json({ notification });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteNotification(req, res) {
        try {
            const { id } = req.body;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const notification = await notificationService.delete(id);
            return res.status(200).json({ notification });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new NotificationController();
