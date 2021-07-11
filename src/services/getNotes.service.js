/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable consistent-return */

/**
 * importing logs
 */
// import config from '../config/logConfig.js';

/**
 * Importing queries
 * This is generaly a data-layer that communicates with the database
 */
import queries from '../db/queries.js';

const NotesFetchService = {
  getAllNotes: async () => {
    try {
      const results = await queries.find();
      return results;
    } catch (error) {
      console.error(error);
    }
  },
};

export default NotesFetchService;
