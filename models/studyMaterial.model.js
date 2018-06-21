
let mongoose = require('mongoose');

let StudyMaterialSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    type: {
        type: String,
        enum: ['PDF', 'Link'],
        trim: true
    },

    title: {
        type: String,
        trim: true
    },

    data: {
        type: String,
        trim: true
    }

});

const StudyMaterial = mongoose.model('StudyMaterial', StudyMaterialSchema);

module.exports = StudyMaterial;
