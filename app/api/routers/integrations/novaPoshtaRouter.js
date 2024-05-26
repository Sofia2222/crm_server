const novaPoshtaRouter = require('express').Router();
const { novaPoshtaController } = require('../../controllers');
const { tenantify } = require('../../../database/models');

novaPoshtaRouter.post('/', tenantify, novaPoshtaController.getStatus);

module.exports = novaPoshtaRouter;
