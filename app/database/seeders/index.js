const status = require('./20240527120723-add-statuses')
const products = require('./20240527122830-add-products')
const orders = require('./20240527173732-add-orders')
const contacts = require('./20240527122841-add-contacts')
const orderInProducts = require('./20240528110038-add-products-in-order')
const deliveries = require('./20240528110751-add-deliveries')

module.exports = {
    status,
    products,
    orders,
    contacts,
    orderInProducts,
    deliveries
}