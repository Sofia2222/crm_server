const { statusController } = require('../controllers');
const statusRouter = require('express').Router();
const { tenantify } = require('../../database/models');

statusRouter.get('/', tenantify, statusController.getStatuses);
statusRouter.get('/:id', tenantify, statusController.getStatusById);
statusRouter.post('/create', tenantify, statusController.createStatus);
statusRouter.post('/update', tenantify, statusController.updateStatus);
statusRouter.post('/delete', tenantify, statusController.deleteStatus);

module.exports = statusRouter;
