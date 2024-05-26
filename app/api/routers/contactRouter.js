const { contactController } = require('../controllers');
const contactRouter = require('express').Router();
const { tenantify } = require('../../database/models');

contactRouter.get('/', tenantify, contactController.getContacts);
contactRouter.get('/:id', tenantify, contactController.getContactById);
contactRouter.get(
    '/byLimit/:limit/:offset',
    tenantify,
    contactController.getContactsByLimit,
);
contactRouter.post('/create', tenantify, contactController.createContact);
contactRouter.post('/update', tenantify, contactController.updateContact);
contactRouter.post('/delete', tenantify, contactController.deleteContact);

module.exports = contactRouter;
