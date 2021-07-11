/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/**
 *  node modules import
 */
import express from 'express';

/**
 * controller import
 */
import noteSave from '../controllers/notesSaveandUpdateController.js';

export const notesRouter = express.Router();

/* Post save and update routes */
notesRouter.post('/save', noteSave.save);
notesRouter.post('/update', noteSave.update);
