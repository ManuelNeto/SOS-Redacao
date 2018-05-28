/*jshint esversion: 6 */
/*global require, exports, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let mongoose = require('mongoose');

let PhotoSchema = new mongoose.Schema({
    
    encoding: {
        type: String,
        trim: true
    },
    
    mimetype: {
        type: String,
        required: true,
        trim: true
    },

    size: {
        type: Number,
        required: true,
        trim: true
    },

    path: {
        type: String,
        required: true,
        trim: true
    }

});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
