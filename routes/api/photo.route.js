/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let PhotoUtil = require('../../util/photo');
let PhotoController = require('../../controllers/photo.controller');


router.post('/', PhotoUtil.receivePhoto(), PhotoController.createPhoto);

module.exports = router;
