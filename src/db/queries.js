/* eslint-disable import/extensions */
import Notes from '../models/notes.js';
// const Notes = require('../models/notes');

const queries = {
  find: async () => {
    try {
      const results = await Notes.find({});
      return results;
    } catch (error) {
      return new Error('Unable to find the documents');
    }
  },
  update: async (query, update) => {
    try {
      const queryFilter = query;
      const updateValues = update;
      const response = await Notes.findOneAndUpdate(queryFilter, updateValues);
      return `${response}`;
    } catch (error) {
      return new Error('Unable to update the selected document');
    }
  },
  save: async (data) => {
    try {
      const { title, description } = data;
      const savedNote = new Notes({ title, description });
      const response = await savedNote.save();
      return response;
    } catch (error) {
      return `Error while saving the document ${error}`;
    }
  },
};

export default queries;
