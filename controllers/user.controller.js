/*jshint esversion: 6 */
/*global require, exports */
/*eslint no-console: 0 */
/* jshint strict: false */

const mongoose = require('mongoose');
const mongoErrors = require('mongo-errors');
const express = require('express');
const router = express.Router();

const User = require('../models/user.model');


exports.getAll = function (req, res) {

  User.find(function (err, users) {
    if (err) return console.error(err);
      res.send(users);
    });
};

exports.getUser = function(req, res, next) {

  User.findOne({_id: req.params.id}, function(err, user) {
    if (err) {
      res.sendStatus(404);
      return next(err);
    }
      var r = res.send(user);

      return next();
    });
};

exports.createUser = function (req, res) {

  var user = new User(req.body);

  user.save(function (err, next) {
      if (err) {
          console.log(err);
          return next(err);
      }
        res.end()
  });
};

exports.editUser = function (req, res) {

  var user = new User(req.body);

  User.findOneAndUpdate({_id: req.body._id}, user, {upsert: true, 'new': true}, function (err, doc) {
    if (err) console.log(err);
      res.send(doc);
    });
};

exports.deleteUser =  function(req, res, next) {

    User.remove({_id: req.params.id}, function(err) {
        if (err) {
            res.sendStatus(404);
            return next(err);
        }
        res.end();

        return next();
    });

};

exports.param = function (req, res, next, _id) {
    var query = User.findById(_id);

    query.exec(function (err, user) {
        if (err) {
            res.sendStatus(code404);
            return next(err);
        }
        if (!user) {
            res.sendStatus(code404);
            return next(new Error('can\'t find user'));
        }

        req.user = user;
        return next();
    });
};
