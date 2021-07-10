const createError = require('http-errors'),
      express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser');

/**
 * Adding logger
 */
 const config = require('./src/config/logConfig')[process.env.NODE_ENV || 'development'];
 const log = config.log();


/**
 * Routing imports
 */
const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');

const app = express();

//Register logger to app 

// app.use(logger.logger);

/**
 * Adding global middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//attaching routes to the route handler
app.use('/', indexRouter);
app.use('/getall', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  log.error(``);
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
