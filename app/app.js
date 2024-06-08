require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 5000;
const {
    authRouter,
    productRouter,
    contactRouter,
    orderRouter,
    paymentRouter,
    statusRouter,
    analyticRouter
} = require('./api/routers');
const Fingerprint = require('express-fingerprint');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
    Fingerprint({
        parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
    }),
);
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    }),
);

app.use('/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/orders', orderRouter);
app.use('/api/statuses', statusRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/analytics', analyticRouter);

const start = async () => {
    app.listen(PORT, () => {
        console.log(`server start on ${PORT} port`);
    });
};

start();
