const NotesFetchService = require('../services/getNotes.service');

module.exports.fetchNotes = async (req, res) => {
  const notes = await NotesFetchService.getAllNotes();
  res.send(`${notes}`);
};
