/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/**
 *  node modules import
 */
import express from 'express';

/**
 * controller import
 */
import fetchNotes from '../controllers/notesFetchController.js';

export const getNotesRouter = express.Router();

/* GET notes listing. */
getNotesRouter.get('/', fetchNotes);
