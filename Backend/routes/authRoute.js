const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidators, loginValidators } = require('../validators/authValidators');
const passport = require('passport');


router.post('/register', registerValidators, authController.register);
router.post('/login', loginValidators, authController.login);
router.get('/logout', authController.logout);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authController.googleAuth);

router.get('/facebook', passport.authenticate('facebook', { scope: ["email"] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), authController.facebookAuth);

module.exports = router;
