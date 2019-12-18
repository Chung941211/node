const express = require('express');
const router = express.Router();
const Posting = require('../controllers/api/list').Posting

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/list', Posting.list)
router.post('/list/add', Posting.add)
router.post('/list/delete', Posting.deletePosting)
router.post('/list/updatePosting', Posting.updatePosting)
router.get('/list/test', Posting.test)


module.exports = router;
