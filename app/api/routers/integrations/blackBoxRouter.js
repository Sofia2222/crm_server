const blackBoxRouter = require('express').Router();
const {blackBoxController} = require("../../controllers");
const {tenantify} = require("../../../database/models");

blackBoxRouter.post('/status', tenantify, blackBoxController.getStatus);

blackBoxRouter.get('/', tenantify,  blackBoxController.addInBlackBox)

module.exports = blackBoxRouter;