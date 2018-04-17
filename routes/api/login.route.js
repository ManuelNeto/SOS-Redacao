/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();

let LoginController = require('../../controllers/login.controller');

router.post('/', LoginController.login);

module.exports = router;
