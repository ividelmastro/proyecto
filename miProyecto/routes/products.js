let express = require('express');
let router = express.Router();
let productsControllers = require('../controllers/productcontroller.js');

router.get('/', productsControllers.index);
router.get('/add', productsControllers.add);



module.exports = router;

