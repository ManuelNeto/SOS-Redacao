/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let ThemeController = require('../../controllers/theme.controller');

router.get('/', tokenValidator, ThemeController.getAll);
router.get('/:id', tokenValidator, ThemeController.getTheme);
router.post('/', tokenValidator, ThemeController.createTheme);
router.put('/', tokenValidator, ThemeController.editTheme);
router.delete('/:id', tokenValidator, ThemeController.deleteTheme);

module.exports = router;
