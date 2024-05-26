const { productController } = require('../controllers');
const productRouter = require('express').Router();
const { tenantify } = require('../../database/models');

productRouter.get('/', tenantify, productController.getProducts);
productRouter.get('/:id', tenantify, productController.getProductById);
productRouter.get(
    '/byLimit/:limit/:offset',
    tenantify,
    productController.getProductsByLimit,
);
productRouter.post('/create', tenantify, productController.createProduct);
productRouter.post('/update', tenantify, productController.updateProduct);
productRouter.post('/delete', tenantify, productController.deleteProduct);

module.exports = productRouter;
