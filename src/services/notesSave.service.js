/* eslint-disable consistent-return */
/* eslint-disable no-console */
/**
 * Node npm packages
 */
// const { isValidObjectId, Mongoose } = require('mongoose');

// const Notes = require('../models/notes');

/**
 * Importing queries
 * This is generaly a data-layer that communicates with the database
 */
const queries = require('../db/queries');

class NotesSave {
  static async saveUserNotes(data) {
    try {
      const noteDTO = data;
      const res = await queries.save(noteDTO);
      return `${res}`;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUserNotes(note) {
    try {
      const { _id, title, description } = note;
      const filter = { _id };
      const updateData = { title, description };
      const results = await queries.update(filter, updateData);
      return results;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new NotesSave();
