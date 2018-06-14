/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

const express = require('express');
const router = express.Router();

const user = require('./api/user.route');
const login = require('./api/login.route');
const essay = require('./api/essay.route');
const theme = require('./api/theme.route');
const downloads = require('./api/downloads.route');

router.use('/user', user);
router.use('/login', login);
router.use('/essay', essay);
router.use('/theme', theme);
router.use('/downloads', downloads);

router.get('/', function (req, res) {
	res.send('<h1>\\\\\\SOS-REDACAO</h1><h4>Lorem ipsum dolor.</h4>');
});

module.exports = router;
