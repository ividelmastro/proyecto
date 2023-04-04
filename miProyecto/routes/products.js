let express = require('express');
let router = express.Router();
let productController = require('../controllers/productcontroller.js');

router.get('/', productsController.index);
router.get('/add', productsController.add);

module.exports = router;

