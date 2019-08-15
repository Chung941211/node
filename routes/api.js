const express = require('express');
const router = express.Router();
const list = requre('./api/list')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', list.getList)

module.exports = router;
