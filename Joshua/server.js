// jshint esversion:6
// const {json } = require('express');
const express = require('express');
const helper = require('./helper');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const multer = require("multer");
const bookRouter = require('./route/bookrouter');
const upload = multer({ dest: 'uploads/' });
const bookRout = require("./route/bookrouter");
const app = express();
mongoose.connect("mongodb://localhost:27017/task8DB", { useUnifiedTopology: true });

// app.use(json)
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/books", bookRout);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/upload.html");
});

app.post("/book", upload.single('file'), function(req, res) {
    console.log(req.file);
});



let port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);

});