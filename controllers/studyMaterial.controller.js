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


const StudyMaterial = require('../models/studyMaterial.model');

exports.getMyStudyMaterials = function(req, res, next) {

    StudyMaterial.find({user: req.params.id}, {data: 0}, function(err, studyMaterials) {

        if(err) return responses.internalError(res);

        else if(!studyMaterials){
            return responses.notFound(res, 'STUDY_MATERIAL_NOT_FOUND');
        }
        return responses.ok(res, '', studyMaterials);
    });

};

exports.getAllStudyMaterials = function(req, res, next) {

    StudyMaterial.find({}, {data: 0}, function(err, studyMaterials) {

        if(err) return responses.internalError(res);

        else if(!studyMaterials){
            return responses.notFound(res, 'STUDY_MATERIAL_NOT_FOUND');
        }
        return responses.ok(res, '', studyMaterials);
    });

};

exports.getStudyMaterial = function(req, res, next) {

      StudyMaterial.find({_id: req.params.id}, function(err, studyMaterials) {

        if(err) return responses.internalError(res);

        else if(!studyMaterials){

            return responses.notFound(res, 'STUDY_MATERIAL_NOT_FOUND');
        }
/*
        console.log(studyMaterials[0].data);
        res.type('pdf');
        res.end(studyMaterials[0].data, 'binary')
*/
/*
          res.writeHead(200, {
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment; filename="filename.pdf"'
          });

          const download = Buffer.from(studyMaterials[0].data, 'base64');

          res.end(download); */
          return responses.ok(res, '', studyMaterials[0].data);
    });

};


exports.createStudyMaterial = function (req, res) {

    var studyMaterial = new StudyMaterial(req.body);

    if(!studyMaterial){
        return responses.badRequest(res, 'STUDY_MATERIAL_REQUIRED');
    }

    studyMaterial.save(function (err, next) {
        if (err) {
            return responses.internalError(res);
        }
        return responses.created(res, 'SUCCESSFUL_STUDY_MATERIAL_CREATION', studyMaterial);
    });

};

exports.deleteStudyMaterial =  function(req, res, next) {

    if(!req.params.id){
        return responses.badRequest(res, 'DELETE_STUDY_MATERIAL');
    }

    StudyMaterial.remove({_id: req.params.id}, function(err) {
        if(err) return responses.internalError(res);
        return responses.ok(res, 'REMOVED_STUDY_MATERIAL');
    });

};
