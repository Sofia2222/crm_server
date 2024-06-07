const paymentService = require('../services/paymentService');

class PaymentController {
    async getPaymentsByLimit(req, res) {
        try {
            const { limit, offset } = req.query;
            const payments = await paymentService.getByLimit({ limit, offset });
            console.log(payments)
            return res.status(200).json({ payments });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getPaymentById(req, res) {
        try {
            const { id } = req.params;
            const payment = await paymentService.getById(id);
            return res.status(200).json({ payment});
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createPayment(req, res) {
        try {
            const {storageId} = req.userPayload;
            const { payment } = req.body;
            const paymentResponse = await paymentService.create({
                payment, storageId
            });
            return res.status(200).json({ paymentResponse });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updatePayment(req, res) {
        try {
            const {storageId} = req.userPayload;
            const {id, payment} = req.body;
            const paymentResponse = await paymentService.update({
                id,
                payment,
                storageId,
            });
            return res.status(200).json({ paymentResponse });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deletePayment(req, res) {
        try {
            const { id } = req.body;
            const payment = await paymentService.delete(id);
            return res.status(200).json({ payment });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new PaymentController();
