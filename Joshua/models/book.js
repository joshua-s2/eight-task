//jshint esversion:6
const mongoose = require('mongoose');
const task8Schema = new mongoose.Schema({
    name: String,
    path: String

});

const Book = mongoose.model("Book", task8Schema);
module.exports = Book;