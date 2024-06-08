const authController = require('./authController');
const productController = require('./productController');
const contactController = require('./contactController');
const orderController = require('./orderController');
const paymentController = require('./paymentController');
const statusController = require('./statusController');
const analyticsController = require('./analyticsController');

module.exports = {
    authController,
    productController,
    contactController,
    orderController,
    paymentController,
    statusController,
    analyticsController
};
