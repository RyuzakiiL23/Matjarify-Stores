const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidators, loginValidators } = require('../validators/authValidators');

router.post('/register', registerValidators, authController.register);
router.post('/login', loginValidators, authController.login);
router.get('/logout', authController.logout);


module.exports = router;
