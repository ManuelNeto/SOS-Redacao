/*jshint esversion: 6 */
/*global require, exports */
/*eslint no-console: 0 */
/* jshint strict: false */

const multer = require('multer');
const osHomedir = require('os-homedir');
const path = require('path');
const os = require('os');

const photoFolder = path.join(osHomedir(), '.sos-redacao');
const tmpFolder = path.join(os.tmpdir(), 'sos-redacao');

const upload = multer({ dest: tmpFolder, fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/png'  || 
        file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      req.hasInvalidFile = true;
      cb(null, false);
    }
}});

exports.receivePhoto = function () {
    return upload.single('photo');
};

exports.getPhotoFolder = function () {
    return photoFolder;
}

exports.handlePhoto = function (req) {
    /* TODO:
        - verificar se existe foto na requisição (req.photo_id)
          se for o caso, é porque o usuário fez upload de foto nova
        - se existir, recuperar foto no BD, deletar essa foto do BD
          e deletar aquivo onde essa foto está na home (photo.path)
    */ 
}