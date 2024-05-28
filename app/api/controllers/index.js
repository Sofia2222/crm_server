const authController = require('./authController');
const productController = require('./productController');
const contactController = require('./contactController');
const orderController = require('./orderController');
const blackBoxController = require('./integrations/blackBoxController');
const novaPoshtaController = require('./integrations/novaPoshtaController');
const paymentController = require('./paymentController');
const notificationController = require('./notificationController');
const statusController = require('./statusController');

module.exports = {
    authController,
    productController,
    contactController,
    orderController,
    blackBoxController,
    novaPoshtaController,
    paymentController,
    statusController,
    notificationController
};
