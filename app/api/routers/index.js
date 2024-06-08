const authRouter = require('./authRouter');
const productRouter = require('./productRouter');
const contactRouter = require('./contactRouter');
const orderRouter = require('./orderRouter');
const statusRouter = require('./statusRouter');
const paymentRouter = require('./paymentRouter');
const analyticRouter = require('./analyticRouter');

module.exports = {
    authRouter,
    productRouter,
    contactRouter,
    orderRouter,
    paymentRouter,
    statusRouter,
    analyticRouter
};
