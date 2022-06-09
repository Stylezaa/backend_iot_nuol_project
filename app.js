var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

//passport library
const passport = require('passport');

var cors = require('cors');

//require config
const config = require('./config/index');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sensorRouter = require('./routes/sensor');
const chartRouter = require('./routes/chart');

//import middleware
const errorHandler = require('./middleware/errorHandler');

var app = express();

//init passport
app.use(passport.initialize());

app.use(cors());

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false, //for delete warning from console
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/sensor', sensorRouter);
app.use('/api/chart', chartRouter);

//use errorHandler middleware
app.use(errorHandler);

module.exports = app;