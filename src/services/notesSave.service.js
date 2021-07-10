/**
 * Node npm packages
 */
const { isValidObjectId, Mongoose } = require('mongoose');

const Notes = require('../models/notes');

/**
 * Importing queries
 * This is generaly a data-layer that communicates with the database
 */
 const queries = require('../db/queries');

class NotesSave {
       constructor() {}
       
       async saveUserNotes (data) {
           try {
            const noteDTO = data;
            const res = await queries.save(noteDTO);
            return `${res}`;
           } catch (error) {
            console.log(error);
           }
       }

       async updateUserNotes (note) {
          try {
            const {_id, title, description} = note;
            const filter = { "_id": _id }
            const updateData = {title, description};
            const results = await queries.update(filter, updateData);
            return results;
          } catch (error) {
              console.log(error)
          }
       }

}

module.exports = new NotesSave();