let express = require('express');
let router = express.Router();
let registroControllers = require('../controllers/registroController.js');

router.get('/', registroControllers.index);


module.exports = router;
