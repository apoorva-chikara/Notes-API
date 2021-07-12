/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/**
 * importing logs
 */
// import config from '../config/logConfig.js';
/**
 * Importing queries
 * This is generaly a data-layer that communicates with the database
 */
import queries from '../db/queries.js';

class NotesSave {
  static async saveUserNotes(data) {
    try {
      const noteDTO = data;
      const res = await queries.save(noteDTO);
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  static async updateUserNotes(note) {
    try {
      const { _id, description } = note;
      const filter = { _id };
      const updateData = { description };
      const results = await queries.update(filter, updateData);
      return results;
    } catch (error) {
      console.error(error);
    }
  }
}

export default NotesSave;
