let express = require('express');
let router = express.Router();
let productController = require('../controllers/productcontroller.js');

router.get('/', productController.index);
router.get('/add', productController.add);

module.exports = router;

