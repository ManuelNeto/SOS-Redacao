/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let UserController = require('../../controllers/user.controller');

router.get('/', tokenValidator, UserController.getAll);
router.get('/:id', tokenValidator, UserController.getUser);
router.post('/', UserController.createUser);
router.put('/', tokenValidator, UserController.editUser);
// TODO: router.put('/', tokenValidator, PhotoUtil.handlePhoto, UserController.editUser);
router.delete('/:id', tokenValidator, UserController.deleteUser);

module.exports = router;
