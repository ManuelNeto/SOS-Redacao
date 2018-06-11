/*jshint esversion: 6 */
/*global require, exports, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let mongoose = require('mongoose');

let ThemeSchema = new mongoose.Schema({

  theme: {
      type: String,
      required: true

  },

  supporting_texts: {
      type: [{
          text: {type: String, required: true},
          image: {type: String, required: true}
      }]
  }

});

const Essay = mongoose.model('Theme', ThemeSchema);

module.exports = Theme;
