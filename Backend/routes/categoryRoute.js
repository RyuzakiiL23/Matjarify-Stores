const express = require('express');
const router = express.Router();
const categorController  = require('../controllers/categoryController');

router.get('/create', categorController.create);
router.put('/update/:id', categorController.update);
router.get('/show/:id', categorController.show);
router.delete('/destroy/:id', categorController.destroy);


module.exports = router;