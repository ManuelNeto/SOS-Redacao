/*jshint esversion: 6 */
/*global require, exports, module */
/*eslint no-console: 0 */
/* jshint strict: false */

let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: {
            validator: (email) => {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email);
            },
            message: "INVALID_EMAIL"
        },
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    userName: {
        type: String,
        required: true,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        enum: ['Masculino, Feminino']
        trim: true
    },

    birthdate: {
        type: String,
        required: true,
        trim: true
    },

    school: {
        type: String,
        required: true,
        trim: true
    },

    degreeOfSchooling: {
        type: String,
        required: true,
        trim: true
    },

    userKind: {
        type: String,
        required: true,
        enum: ['Corretor', 'Redator'],
        trim: true
    },

    correctorKind: {
        type: String,
        trim: true
    },

    photo: {
        type: String,
        trim: true
    },

    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
