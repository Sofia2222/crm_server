const paymentService = require('../services/statusService');
const { Conflict } = require('../utils/Errors');

class PaymentController {
    async getPayments(req, res) {
        try {
            const payments = await paymentService.getAll();
            return res.status(200).json({ payments });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getPaymentById(req, res) {
        try {
            const { id } = req.params;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const payment = await paymentService.getById(id);
            return res.status(200).json({ payment: payment || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createPayment(req, res) {
        try {
            const userPayload = req.userPayload;
            const { firstName, lastName, middleName, phone, email, comment } =
                req.body;

            const payment = await paymentService.create({
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: storage
            return res.status(200).json({ payment });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updatePayment(req, res) {
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

            const payment = await paymentService.update({
                id,
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: from payload

            return res.status(200).json({ payment });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deletePayment(req, res) {
        try {
            const { id } = req.body;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const payment = await paymentService.delete(id);
            return res.status(200).json({ payment });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new PaymentController();
