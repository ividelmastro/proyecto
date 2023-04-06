var express = require('express');
var router = express.Router();



router.get('/', controllers.index);
router.get('/searchResults', controllers.searchResults);
router.get('/login', controllers.login);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
