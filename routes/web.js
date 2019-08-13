const express = require('express');
const router = express.Router();
const index = require('../controllers/index');
const login = require('../controllers/login');

router.get('/', index.home);

router.get('/login', login.login);


module.exports = router;
