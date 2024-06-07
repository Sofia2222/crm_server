const { paymentController } = require('../controllers');
const paymentRouter = require('express').Router();
const { tenantify } = require('../../database/models');
const {checkToken} = require("../../middlewares/checkToken");

paymentRouter.get('/', tenantify, checkToken, paymentController.getPaymentsByLimit);
paymentRouter.get('/:id', tenantify, checkToken, paymentController.getPaymentById);
paymentRouter.post('/create', tenantify, checkToken, paymentController.createPayment);
paymentRouter.put('/update', tenantify, checkToken, paymentController.updatePayment);
paymentRouter.delete('/delete', tenantify, checkToken, paymentController.deletePayment);

module.exports = paymentRouter;
