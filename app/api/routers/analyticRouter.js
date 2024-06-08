const { analyticsController } = require('../controllers');
const analyticRouter = require('express').Router();
const { tenantify } = require('../../database/models');
const {checkToken} = require("../../middlewares/checkToken");

analyticRouter.get('/counts', tenantify, checkToken, analyticsController.getCounts);
analyticRouter.post('/getAnalytics', tenantify, analyticsController.getAnalytics);

module.exports = analyticRouter;
