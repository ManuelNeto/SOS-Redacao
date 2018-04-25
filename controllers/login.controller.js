/*jshint esversion: 6 */
/*global require, exports */
/*eslint no-console: 0 */
/* jshint strict: false */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const responses = require('../util/responses');

exports.getAll = function (req, res) {

  User.find(function (err, users) {
    if (err) return console.error(err);
      res.send(users);
    });
};

exports.login = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}).then(function (user) {
        if (!user) {
            return responses.notFound(res, 'USER_NOT_FOUND');
        }

        if (!(user.password === password)) {
            return responses.unauthorized(res, 'INVALID_CREDENTIALS');
        }

        let token = jwt.sign({id: user._id}, 'dna8A7D8A7y8d&H*&d*&*D7', {expiresIn: 86400});

        return responses.ok(res, 'USER_AUTHENTICATED', {
            auth: true,
            name: user.name,
            userKind: user.userKind,
            token: token
        });

    }).catch(function (e) {
        console.error(e);
        return responses.internalError(res);
    });
};
