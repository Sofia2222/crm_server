const { contactController } = require('../controllers');
const contactRouter = require('express').Router();
const { tenantify } = require('../../database/models');
const {checkToken} = require("../../middlewares/checkToken");

contactRouter.get('/', tenantify, checkToken, contactController.getContactsByLimit);
contactRouter.get('/:id', tenantify, checkToken, contactController.getContactById);
contactRouter.post('/create', tenantify, checkToken, contactController.createContact);
contactRouter.put('/update', tenantify, checkToken, contactController.updateContact);
contactRouter.delete('/delete', tenantify, checkToken, contactController.deleteContact);

module.exports = contactRouter;
