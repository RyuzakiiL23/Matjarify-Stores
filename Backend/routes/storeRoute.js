const router = require('express').Router();
const storeController = require('../controllers/storeController');
const authenticated = require('../middleware/authenticated');
const authenticatedStore = require('../middleware/authenticatedStore');

router.post('/create', authenticated, storeController.create);
router.put('/update/:id', authenticatedStore, storeController.update);
router.get('/show/:id', authenticatedStore, storeController.show);
router.delete('/destroy/:id', storeController.destroy);

module.exports = router;