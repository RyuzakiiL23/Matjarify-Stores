// authRoutes.js

const express = require('express');
const { register, login, get_all_users } = require('../controllers/authController.js');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/all_users', get_all_users);

module.exports = router;
