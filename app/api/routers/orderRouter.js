const { orderController } = require('../controllers');
const orderRouter = require('express').Router();
const { tenantify } = require('../../database/models');

orderRouter.get('/', tenantify, orderController.getTableOrders);
orderRouter.get('/:id', tenantify, orderController.getOrderById);
orderRouter.get('/count', tenantify, orderController.getOrdersCount);
orderRouter.post('/create', tenantify, orderController.createOrder);
orderRouter.post('/update', tenantify, orderController.updateOrder);
orderRouter.post('/delete', tenantify, orderController.deleteOrder);

module.exports = orderRouter;
