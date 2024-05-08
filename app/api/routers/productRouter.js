const {productController} = require("../controllers");
const productRouter = require('express').Router();
const {tenantify} = require("../../database/models");

productRouter.get('/all', tenantify, productController.getProducts);




module.exports = productRouter;