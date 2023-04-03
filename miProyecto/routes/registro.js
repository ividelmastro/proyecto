let express = require('express');
let router = express.Router();
let reh=gistrocontroller = require('../controlles/registrocontroller');

router.get('/', registrocontroller.index);

module.exports = router;