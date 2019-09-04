const express = require('express');
const router = express.Router();
const Posting = require('../controllers/api/list').Posting

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/list', Posting.list)
router.get('/list/content', Posting.content)
router.post('/list/add', Posting.add)
router.post('/list/delete', Posting.deletePosting)

module.exports = router;
