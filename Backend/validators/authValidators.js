const { body } = require('express-validator');

const registerValidators = [
    body('firstName').isLength({min: 2}).withMessage('need at least 2 char').notEmpty().withMessage('required field').escape(),
    body('lastName').isLength({min: 2}).withMessage('need at least 2 char').notEmpty().withMessage('required field').escape(),
    body('email').isEmail().withMessage('not a email').normalizeEmail().notEmpty().withMessage('required field'),
    body('password').isLength({ min: 8 }).withMessage('required at least 8 char').notEmpty().withMessage('required field').escape(),
    body('confirmPassword').custom((value, { req }) => value === req.body.password)
];

const loginValidators = [
    body('email').isEmail().withMessage('not a email').normalizeEmail().notEmpty().withMessage('required field'),
    body('password').isLength({ min: 8 }).withMessage('required at least 8 char').notEmpty().withMessage('required field').escape(),
];

module.exports = {
    registerValidators,
    loginValidators
};