const express = require('express');
const router = express.Router();
const index = require('../controllers/index');

router.get('/', index.home);

router.get('/list', index.list);


module.exports = router;
