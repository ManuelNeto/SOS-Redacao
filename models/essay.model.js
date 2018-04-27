/*jshint esversion: 6 */
/*global require, exports, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let mongoose = require('mongoose');

let EssaySchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    theme: {
        type: String,
        required: true,
        trim: true
    },

    type: {
        type: String,
        enum: ['Enem', 'Vestibular', 'Concurso'],
        required: true,
        trim: true
    },

    title: {
        type: String,
        trim: true
    },

    text: {
        type: String,
        required: true,
        trim: true
    }
});

const Essay = mongoose.model('Essay', UserSchema);

module.exports = Essay;
