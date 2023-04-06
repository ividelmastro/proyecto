let express = require('express');
let router = express.Router();
let loginControllers = require('../controllers/loginController.js');

router.get('/', loginControllers.index);

module.exports = router;
