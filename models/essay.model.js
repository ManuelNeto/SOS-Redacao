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

    corrector: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    comment: {
      type: String,
      trim: true
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
        trim: true
    },

    status: {
        type: String,
        enum: ['Aguardando correção', 'Corrigida', 'Aguardando recorreção'],
        default: 'Aguardando correção',
        required: true,
        trim: true
    },

    scores: {
      type: Array,
      trim: true,
      default: [0,0,0,0,0,0]
    },

    messages: {
      type: [{
          email: {type: String, required: true},
          text: {type: String, required: true},
          timestamp: {type: String, required: true}
      }]
    },

    essayImage: {
        type: String
    }

});

const Essay = mongoose.model('Essay', EssaySchema);

module.exports = Essay;
