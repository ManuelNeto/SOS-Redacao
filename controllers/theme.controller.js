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


const Theme = require('../models/theme.model');


exports.getAll = function (req, res) {

  Theme.find(function (err, themes) {
    if(err) return responses.internalError(res);

    else if(!themes){
      return responses.notFound(res, 'THEMES_NOT_FOUND');
    }
    return responses.ok(res, '', themes);
  }).populate('proposedBy', 'name');

};

exports.getThemesProposedBy = function (req, res) {
  console.log(req.params.id);
  Theme.find({proposedBy: req.params.id},function (err, themes) {
    if(err) return responses.internalError(res);

    else if(!themes){
      return responses.notFound(res, 'THEMES_NOT_FOUND');
    }
    return responses.ok(res, '', themes);
  }).populate('proposedBy', 'name');

};

exports.getTheme = function(req, res, next) {

  Theme.findOne({_id: req.params.id}, function(err, theme) {

    if(err) return responses.internalError(res);

    else if(!theme){
      return responses.notFound(res, 'THEME_NOT_FOUND');
    }
      return responses.ok(res, '', theme);
    });
};

exports.createTheme = function (req, res) {

  if (!req.body){
      return responses.badRequest(res, 'THEME_REQUIRED');
  } else {
      var theme = new Theme(req.body);
      theme.save(function (err, next) {
          if (err) {
              return responses.badRequest(res, "DUPLICATE_THEME");
          }

          return responses.created(res, 'SUCCESSFUL_THEME_CREATION', {name: theme.theme});

      });

  }
};

exports.editTheme = function (req, res) {

  var theme = new Theme(req.body);

  if(!theme){
    return responses.badRequest(res, 'THEME_REQUIRED');
  }

  Theme.findOneAndUpdate({_id: req.body._id}, theme, {upsert: true, 'new': true}, function (err, updatedTheme) {

    if(err){
      if (err.code === mongoErrors.DuplicateKey) {
                return responses.badRequest(res, "DUPLICATE_THEME");
      }
      return responses.internalError(res);
    }

    return responses.ok(res, 'UPDATED_THEME', updatedTheme);
  });

};

exports.deleteTheme =  function(req, res, next) {

    if(!req.params.id){
      return responses.badRequest(res, 'THEME_REQUIRED');
    }

    Theme.remove({_id: req.params.id}, function(err) {
        if(err) return responses.internalError(res);
        return responses.ok(res, 'REMOVED_THEME');
    });

};

exports.param = function (req, res, next, _id) {
    var query = Theme.findById(_id);

    query.exec(function (err, theme) {
        if (err) {
            res.sendStatus(code404);
            return next(err);
        }
        if (!theme) {
            res.sendStatus(code404);
            return next(new Error('can\'t find theme'));
        }

        req.theme = theme;
        return next();
    });
};
