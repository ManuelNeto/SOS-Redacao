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

exports.downloadStudyMaterial = function(req, res) {
  res.download('../SOS-Redacao_BackEnd/downloads/' + req.body.fileName, req.body.fileName);
};
