const { notificationController } = require('../controllers');
const notificationRouter = require('express').Router();
const { tenantify } = require('../../database/models');

notificationRouter.get('/', tenantify, notificationController.getNotifications);
notificationRouter.get('/:id', tenantify, notificationController.getNotificationById);
notificationRouter.post('/create', tenantify, notificationController.createNotification);
notificationRouter.post('/update', tenantify, notificationController.updateNotification);
notificationRouter.post('/delete', tenantify, notificationController.deleteNotification);

module.exports = notificationRouter;
