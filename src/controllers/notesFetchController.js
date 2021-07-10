const NotesFetchService  = require('../services/getNotes.service');

module.exports.fetchNotes = async (req, res, next) => {
   
            const notes = await NotesFetchService.getAllNotes();
            res.send(`${notes}`);
};