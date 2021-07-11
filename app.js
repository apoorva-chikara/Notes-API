/* eslint-disable import/extensions */
// import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

/**
 * Adding logger
 */
// import config from './src/config/logConfig.js';

/**
 * Routing imports
 */
import { notesRouter } from './src/routes/notes.js';
import { getNotesRouter } from './src/routes/getNotes.js';

// const configInstance = config[process.env.NODE_ENV || 'development'];

// const log = configInstance.log();

const app = express();

/**
 * Adding global middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// attaching routes to the route handler
app.use('/', notesRouter);
app.use('/getall', getNotesRouter);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// unhandledRejection promise rejection
process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

// error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   log.error('');
//   res.status(err.status || 500);
//   // res.render('error');
// });

export default app;
