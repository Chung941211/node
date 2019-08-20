const express = require('express');
const router = express.Router();
const list = require('../controllers/api/list')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', list.posting)

module.exports = router;
