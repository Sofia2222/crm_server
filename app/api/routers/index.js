const authRouter = require('./authRouter');
const productRouter = require('./productRouter');
const contactRouter = require('./contactRouter');
const orderRouter = require('./orderRouter');
const blackBoxRouter = require('./integrations/blackBoxRouter');
const novaPoshtaRouter = require('./integrations/novaPoshtaRouter');

module.exports = {
    authRouter,
    productRouter,
    contactRouter,
    orderRouter,
    blackBoxRouter,
    novaPoshtaRouter
}