const express = require('express');
const router = express.Router();
const index = require('../controllers/index');
const login = require('../controllers/login');
const operation   = require('../controllers/operation');

router.get('/', index.home);

router.get('/login', login.login);

router.get('/add', operation.add)

module.exports = router;
