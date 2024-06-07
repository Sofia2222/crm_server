const { orderController } = require('../controllers');
const orderRouter = require('express').Router();
const { tenantify } = require('../../database/models');
const {checkToken} = require("../../middlewares/checkToken");

orderRouter.get('/', tenantify, checkToken, orderController.getTableOrders);
orderRouter.get('/:id', tenantify, checkToken, orderController.getOrderById);
orderRouter.post('/create', tenantify, checkToken, orderController.createOrder);
orderRouter.put('/update', tenantify, checkToken, orderController.updateOrder);
orderRouter.delete('/delete', tenantify, checkToken, orderController.deleteOrder);

module.exports = orderRouter;
