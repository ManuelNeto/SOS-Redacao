/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let EssayController = require('../../controllers/essay.controller');


router.get('/', tokenValidator, EssayController.getAll);
router.get('/:id', tokenValidator, EssayController.getEssay);
router.get('/toCorect/', tokenValidator, EssayController.essaysToCorect);
router.get('/myEssays/:id', tokenValidator, EssayController.getMyEssays);
router.post('/', tokenValidator, EssayController.createEssay);
router.put('/', tokenValidator, EssayController.editEssay);
router.delete('/:id', tokenValidator, EssayController.deleteEssay);

module.exports = router;
