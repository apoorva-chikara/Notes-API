const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

/**
 * Adding logger
 */
const config = require('./src/config/logConfig')[process.env.NODE_ENV || 'development'];

const log = config.log();

/**
 * Routing imports
 */
const notesRouter = require('./src/routes/notes');
const getNotesRouter = require('./src/routes/getNotes');

const app = express();

// Register logger to app

// app.use(logger.logger);

/**
 * Adding global middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// attaching routes to the route handler
app.use('/', notesRouter);
app.use('/getall', getNotesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  log.error('');
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
