const statusService = require('../services/statusService');
const { Conflict } = require('../utils/Errors');

class StatusController {
    async getStatuses(req, res) {
        try {
            const statuses = await statusService.getAll();
            return res.status(200).json({ statuses });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getStatusById(req, res) {
        try {
            const { id } = req.params;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const status = await statusService.getById(id);
            return res.status(200).json({ status: status || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createStatus(req, res) {
        try {
            const userPayload = req.userPayload;
            const { firstName, lastName, middleName, phone, email, comment } =
                req.body;

            const status = await statusService.create({
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: storage
            return res.status(200).json({ status });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateStatus(req, res) {
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

            const status = await statusService.update({
                id,
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: from payload

            return res.status(200).json({ status });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteStatus(req, res) {
        try {
            const { id } = req.body;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const status = await statusService.delete(id);
            return res.status(200).json({ status });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new StatusController();
