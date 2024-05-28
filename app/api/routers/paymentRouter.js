const { paymentController } = require('../controllers');
const paymentRouter = require('express').Router();
const { tenantify } = require('../../database/models');

paymentRouter.get('/', tenantify, paymentController.getPayments);
paymentRouter.get('/:id', tenantify, paymentController.getPaymentById);
paymentRouter.post('/create', tenantify, paymentController.createPayment);
paymentRouter.post('/update', tenantify, paymentController.updatePayment);
paymentRouter.post('/delete', tenantify, paymentController.deletePayment);

module.exports = paymentRouter;
