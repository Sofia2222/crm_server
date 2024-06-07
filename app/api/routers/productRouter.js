const { productController } = require('../controllers');
const productRouter = require('express').Router();
const { tenantify } = require('../../database/models');
const {checkToken} = require("../../middlewares/checkToken");

productRouter.get('/', tenantify, checkToken, productController.getProductsByLimit);
productRouter.get('/:id', tenantify, checkToken, productController.getProductById);
productRouter.post('/create', tenantify, checkToken, productController.createProduct);
productRouter.put('/update', tenantify, checkToken, productController.updateProduct);
productRouter.delete('/delete', tenantify, checkToken, productController.deleteProduct);

module.exports = productRouter;
