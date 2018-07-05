/*jshint esversion: 6 */
/*global require, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let express = require('express');
let router = express.Router();
let tokenValidator = require('../../util/token.validator');
let NotificationController = require('../../controllers/notifications.controller');



router.get('/:id', tokenValidator, NotificationController.getNotifications);
router.post('/', tokenValidator, NotificationController.createNotification);
router.delete('/:id', tokenValidator, NotificationController.deleteNotification);

module.exports = router;
