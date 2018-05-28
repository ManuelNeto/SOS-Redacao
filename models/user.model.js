/*jshint esversion: 6 */
/*global require, exports, module */
/*eslint no-console: 0 */
/* jshint strict: false */
var crypto = require('crypto');

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
        enum: ['Masculino', 'Feminino'],
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    },

    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function (password){
    this.salt = crypto.randomBytes(16).toString('hex');
    UserSchema.salt = this.salt;
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
    UserSchema.hash = this.hash;
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
    return this.hash === hash;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
