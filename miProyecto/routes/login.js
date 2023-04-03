let express = require('express');
let router = express.Router();
let logincontroller = require('../controllers/logincontroller.js');

router.get('/', loginController.index);

module.exports = router;