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
router.get('/50-Dicas-Para-escrever-uma-boa-redacao.pdf', StudyMaterialController.downloadStudyMaterial);
router.get('/manual_de_redacao_do_enem_2017.pdf', StudyMaterialController.downloadStudyMaterial);
router.get('/redacao_para_concursos.pdf', StudyMaterialController.downloadStudyMaterial);
router.get('/tecnicas_de_redacao_para_concursos.pdf', StudyMaterialController.downloadStudyMaterial);

module.exports = router;
