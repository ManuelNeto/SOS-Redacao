/*jshint esversion: 6 */
/*global require, exports */
/*eslint no-console: 0 */
/* jshint strict: false */

const mongoose = require('mongoose');
const mongoErrors = require('mongo-errors');
const express = require('express');
const router = express.Router();
const responses = require('../util/responses');
const jwt = require('jsonwebtoken');
const PhotoUtil = require('../util/photo');
const path = require('path');
const mv = require('mv');
const del = require('del');


const Photo = require('../models/photo.model');


exports.createPhoto = function (req, res) {

  if(req.hasInvalidFile) {
    return responses.badRequest(res, 'PHOTO_ONLY');
  }

  let file = req.file;
  let filename = file.filename + path.extname(file.originalname);
  let orig = file.path;
  let dest = path.join(PhotoUtil.getPhotoFolder(), filename);
  file.path = dest;

  var photo = new Photo(file);

  if(!photo){
    return responses.badRequest(res, 'PHOTO_REQUIRED');
  }

  mv(orig, dest, {mkdirp: true}, function (err) {
    if (err) {
      return responses.internalError(res);
    }

    photo.save(function (err, next) {
      if (err) {
        del([dest], {force:true}).then(paths => {
          // TODO: usem outro log
          console.log('Deleted photo:\n', paths.join('\n'));
        });
        return responses.internalError(res);
      }
    });

    return responses.created(res, 'SUCCESSFUL_PHOTO_CREATION', photo);

  });

};
