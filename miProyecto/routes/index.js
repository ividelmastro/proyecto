var express = require('express');
var indexController = require('../controllers/indexController');
var router = express.Router();



router.get('/', controllers.index);
router.get('/searchResults', controllers.searchResults);
router.get('/login', controllers.login);


/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
