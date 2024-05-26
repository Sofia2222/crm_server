const authController = require('./authController');
const productController = require('./productController');
const contactController = require('./contactController');
const orderController = require('./orderController');
const blackBoxController = require('./integrations/blackBoxController');
const novaPoshtaController = require('./integrations/novaPoshtaController');

module.exports = {
    authController,
    productController,
    contactController,
    orderController,
    blackBoxController,
    novaPoshtaController,
};
