var mongoose = require('mongoose');
var express = require('express');
var app = express();

// Attach body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
var book_routes = require('./routes/book_routes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library');

app.get('/', function (req, res) {
    res.send("Something")
});

app.use('/book', book_routes);

app.listen(3000, function () {
    console.log('Running at port 3000...');
});