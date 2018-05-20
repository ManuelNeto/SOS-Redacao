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


const Essay = require('../models/essay.model');


exports.getAll = function (req, res) {

  Essay.find(function (err, essays) {
    if(err) return responses.internalError(res);

    else if(!essays){
      return responses.notFound(res, 'ESSAYS_NOT_FOUND');
    }
    return responses.ok(res, '', essays);
  });

};

exports.getEssay = function(req, res, next) {

  Essay.findOne({_id: req.params.id}, function(err, essay) {

    if(err) return responses.internalError(res);

    else if(!essay){
      return responses.notFound(res, 'ESSAY_NOT_FOUND');
    }
      return responses.ok(res, '', essay);
    });
};

exports.downloadEssayModel = function(req, res) {
  console.log('download');
  res.download('../SOS-Redacao_BackEnd/img/modeloDeRedacao.JPG', 'modeloDeRedacao.JPG');
  //return responses.ok(res, 'SUCESS_DOWNLOAD', null);
};

exports.createEssay = function (req, res) {

  var essay = new Essay(req.body);

  if(!essay){
    return responses.badRequest(res, 'ESSAY_REQUIRED');
  }

  essay.save(function (err, next) {
      if (err) {
          return responses.internalError(res);
      }
        return responses.created(res, 'SUCCESSFUL_ESSAY_CREATION', essay);
  });

};

exports.editEssay = function (req, res) {

  var essay = new Essay(req.body);

  if(!essay){
    return responses.badRequest(res, 'ESSAY_REQUIRED');
  }

  Essay.findOneAndUpdate({_id: req.body._id}, essay, {upsert: true, 'new': true}, function (err, updatedEssay) {

    if(err){
      if (err.code === mongoErrors.DuplicateKey) {
                return responses.badRequest(res, "");
      }
      return responses.internalError(res);
    }

    return responses.ok(res, 'UPDATED_ESSAY', updatedEssay);
  });

};

exports.deleteEssay =  function(req, res, next) {

    if(!req.params.id){
      return responses.badRequest(res, 'ESSAY_REQUIRED');
    }

    Essay.remove({_id: req.params.id}, function(err) {
        if(err) return responses.internalError(res);
        return responses.ok(res, 'REMOVED_ESSAY');
    });

};



exports.param = function (req, res, next, _id) {
    var query = Essay.findById(_id);

    query.exec(function (err, essay) {
        if (err) {
            res.sendStatus(code404);
            return next(err);
        }
        if (!essay) {
            res.sendStatus(code404);
            return next(new Error('can\'t find essay'));
        }

        req.essay = essay;
        return next();
    });
};
