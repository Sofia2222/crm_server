const { db } = require('../../database/models');
const ContactService = require('./contactService');
const PaymentService = require('./paymentService');
const OrderService = require('./orderService');
const ProductService = require('./productService');
class AnalyticService {
    async getCounts() {
        return {
            contactsCount: await ContactService.getCount(),
            paymentsCount: await PaymentService.getCount(),
            ordersCount: await OrderService.getCount(),
            productsCount: await ProductService.getCount(),
        }
    }

    async getAnalytics({from, to}) {
        console.log(from, to)
        await OrderService.getAnalytics({from: '2024-06-01', to: '2024-06-08'})
    }
}

module.exports = new AnalyticService();
