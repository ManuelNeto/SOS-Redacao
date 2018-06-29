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


const Notification = require('../models/notification.model');


exports.getNotifications = function (req, res) {
  Notification.find({receiver: req.params.id},function (err, notifications) {
    if(err) return responses.internalError(res);

    else if(!notifications){
      return responses.notFound(res, 'NOTIFICATIONS_NOT_FOUND');
    }
    return responses.ok(res, '', notifications);
  }).populate('receiver', 'name');

};


exports.createNotification = function (req, res) {

  if (!req.body){
      return responses.badRequest(res, 'NOTIFICATION_REQUIRED');
  } else {
      var notification = new Notification(req.body);
      notification.save(function (err, next) {
          if (err) {
              return responses.badRequest(res, "DUPLICATE_NOTIFICATION");
          }

          return responses.created(res, 'SUCCESSFUL_NOTIFICATION_CREATION', {name: notification.title});

      });

  }
};


exports.deleteNotification =  function(req, res, next) {

    if(!req.params.id){
      return responses.badRequest(res, 'NOTIFICATION_REQUIRED');
    }

    Notification.remove({_id: req.params.id}, function(err) {
        if(err) return responses.internalError(res);
        return responses.ok(res, 'REMOVED_NOTIFICATION');
    });

};

exports.param = function (req, res, next, _id) {
    var query = Notification.findById(_id);

    query.exec(function (err, notification) {
        if (err) {
            res.sendStatus(code404);
            return next(err);
        }
        if (!notification) {
            res.sendStatus(code404);
            return next(new Error('can\'t find notification'));
        }

        req.notification = notification;
        return next();
    });
};
