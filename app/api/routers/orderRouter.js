const { orderController } = require('../controllers');
const orderRouter = require('express').Router();
const { tenantify } = require('../../database/models');
const {checkToken} = require("../../middlewares/checkToken");

orderRouter.get('/', tenantify, checkToken, orderController.getTableOrders);
orderRouter.get('/:id', tenantify, orderController.getOrderById);
orderRouter.get('/count', tenantify, orderController.getOrdersCount);
orderRouter.post('/create', tenantify, orderController.createOrder);
orderRouter.put('/update', tenantify, orderController.updateOrder);
orderRouter.delete('/delete', tenantify, orderController.deleteOrder);

module.exports = orderRouter;
