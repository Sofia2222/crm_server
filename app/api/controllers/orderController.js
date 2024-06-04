const orderService = require('../services/orderService');
const { Conflict } = require('../utils/Errors');

class OrderController {
    async getOrderById(req, res) {
        try {
            const { id } = req.params;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const order = await orderService.getById(id);
            return res.status(200).json({ order: order || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getOrdersByLimit(req, res) {
        try {
            const { limit, offset } = req.params;
            console.log(limit, offset);
            const orders = await orderService.getByLimit({ limit, offset });
            return res.status(200).json({ orders });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createOrder(req, res) {
        try {
            const userPayload = req.userPayload;
            const { firstName, lastName, middleName, phone, email, comment } =
                req.body;

            const order = await orderService.create({
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: storage
            return res.status(200).json({ order });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateOrder(req, res) {
        try {
            const { id, params} = req.body;
            console.log(id, params)
            const order = await orderService.update({id, params});
            return res.status(200).json({ order });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteOrder(req, res) {
        try {
            const { id } = req.body;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const order = await orderService.delete(id);
            return res.status(200).json({ order });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }

    async getTableOrders(req, res) {
        try {
            const {limit, offset } = req.query;
            const orders = await orderService.getTableOrders({limit, offset });
            res.status(200).json({ orders });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }

    async getOrdersCount(req, res) {
        try {
            const count = await orderService.getCount();
            res.status(200).json(count);
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new OrderController();
