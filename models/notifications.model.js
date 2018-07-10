/*jshint esversion: 6 */
/*global require, exports, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let mongoose = require('mongoose');

let NotificationSchema = new mongoose.Schema({

    emitter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },

    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    text: {
      type: String,
      trim: true,
      required: true
    },

    title: {
      type: String,
      trim: true,
      required: true
    },

    type: {
      type: String,
      trim: true,
      required: true
    },

    date: {
      type: String,
      trim: true,
      required: true
    },

    toAll: {
      type: Boolean,
      default: false
    }

});

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;
