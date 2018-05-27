/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let EssayController = require('../../controllers/essay.controller');
let StudyMaterialController = require('../../controllers/studyMaterial.controller');

router.get('/', EssayController.downloadEssayModel);
router.post('/', StudyMaterialController.downloadStudyMaterial);

module.exports = router;
