const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const connect = process.env.MONGODB_URI || "mongodb://localhost/momentum"

//plug in promise liblary
mongoose.Promise = global.Promise;

mongoose.connect(connect);
mongoose.connection.on('connected', () => console.log('connected to db'))

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/dist/public')));

//setting the routes
const quotes = require('./quotes');
app.use('/quotes', quotes);

const register = require('./register');
app.use('/register', register);

const links = require('./links');
app.use('/links', links);

const weather = require('./weather');
app.use('/weather', weather);

const background = require('./background');
app.use('/background', background);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/dist/public', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
