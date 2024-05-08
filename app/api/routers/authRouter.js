const {authController} = require("../controllers");
const authRouter = require('express').Router();
const { tokenServices } = require('../services')
const { body } = require('express-validator');
const { error_validation_middleware } = require("../../middlewares");
const { singlify, tenantify} = require("../../database/models");


// authRouter.post(
//     '/signIn',
//     body('email').notEmpty().withMessage('Поле пошта порожнє').escape().isString().trim().isEmail().withMessage('Поле пошта не вірне'),
//     body('password').notEmpty().withMessage('Поле пароль порожнє').escape().isString().trim(),
//     body('domain').notEmpty().withMessage('Поле домен порожнє').escape().isString().trim(),
//     error_validation_middleware,
//     authController.signIn
// );
// authRouter.get(
//     '/test',
//     tokenServices.checkToken,
//     authController.test
// );

authRouter.post(
    '/signIn',
    authController.signIn
);
authRouter.post(
    '/signUp',
    singlify,
    authController.signUpTenant
);

authRouter.post('/logout', authController.logout);
authRouter.get('/refresh', authController.refresh);

// body('name').notEmpty().withMessage(`Поле ім'я порожнє`).escape().isString().trim(),
//     body('surname').notEmpty().withMessage('Поле призвище порожнє').escape().isString().trim(),
//     body('domain').notEmpty().withMessage('Поле домен порожнє').escape().isString().trim(),
//     body('phone').notEmpty().withMessage('Поле телефон порожнє').escape().isString().trim().isMobilePhone("uk-UA").withMessage('Поле телефон не вірне'),
//     body('email').notEmpty().withMessage('Поле пошта порожнє').escape().isString().trim().isEmail(),
//     body('password').notEmpty().withMessage('Поле пароль порожнє').escape().isString().trim(),
//     error_validation_middleware,



module.exports = authRouter;