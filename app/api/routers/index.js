const authRouter = require('./authRouter');
const productRouter = require('./productRouter');
const contactRouter = require('./contactRouter');
const orderRouter = require('./orderRouter');
const notificationRouter = require('./notificationRouter');
const statusRouter = require('./statusRouter');
const paymentRouter = require('./paymentRouter');
const novaPoshtaRouter = require('./integrations/novaPoshtaRouter');
const blackBoxRouter = require('./integrations/blackBoxRouter');

module.exports = {
    authRouter,
    productRouter,
    contactRouter,
    orderRouter,
    blackBoxRouter,
    novaPoshtaRouter,
    paymentRouter,
    notificationRouter,
    statusRouter
};
