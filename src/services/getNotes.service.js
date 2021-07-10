/* eslint-disable no-console */
/* eslint-disable consistent-return */

/**
 * Importing Model
 */
// const Notes = require('../models/notes');

/**
 * Importing queries
 * This is generaly a data-layer that communicates with the database
 */
const queries = require('../db/queries');

class GetNotes {
  static async getAllNotes() {
    try {
      const results = await queries.find();
      return results;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new GetNotes();
