//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const multer = require("multer");
const bookmod = require("../models/book");
const upload = multer({
    dest: 'uploads/'
});


const bookRouter = express.Router();

bookRouter.route("/").get((req, res, next) => {
    console.log(req);
}).post(upload.single('file'), (req, res, next) => {
    console.log(req.file);
    const book = new bookmod({
        name: req.file.filename,
        path: req.file.path
    });

    if (book.save()) {
        res.statusCode = 200;
        res.end('successfull');
    } else {
        res.statusCode = 403;
        res.end('unsuccessfull');
    }


}).delete((req, res, next) => {
    console.log(req);

});
module.exports = bookRouter;