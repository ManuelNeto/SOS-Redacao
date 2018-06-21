
let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let StudyMaterialController = require('../../controllers/studyMaterial.controller');


router.get('/my/:id', tokenValidator, StudyMaterialController.getMyStudyMaterials);
router.get('/', tokenValidator, StudyMaterialController.getAllStudyMaterials);
router.get('/:id', tokenValidator, StudyMaterialController.getStudyMaterial);
router.post('/', tokenValidator, StudyMaterialController.createStudyMaterial);
router.delete('/:id', tokenValidator, StudyMaterialController.deleteStudyMaterial);

module.exports = router;
