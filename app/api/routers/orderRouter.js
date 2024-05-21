const {orderController} = require("../controllers");
const orderRouter = require('express').Router();
const {tenantify} = require("../../database/models");

orderRouter.get('/', tenantify, orderController.getTableOrders);
orderRouter.get('/:id', tenantify, orderController.getOrderById);
orderRouter.get('/byLimit/:limit/:offset', tenantify, orderController.getOrdersByLimit);
orderRouter.post('/create', tenantify, orderController.createOrder);
orderRouter.post('/update', tenantify, orderController.updateOrder);
orderRouter.post('/delete', tenantify, orderController.deleteOrder);

module.exports = orderRouter;