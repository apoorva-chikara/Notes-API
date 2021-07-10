const NotesService  = require('../services/notesSave.service');

module.exports.noteSave =  { 
        save: async (req, res, next) => {
                const notesDTO = req.body;
                const notes = await NotesService.saveUserNotes(notesDTO);
                res.send(`Saved documents ${notes} `)
                
        },

        update: async (req, res, next) => {
        const noteDTO = req.body;
        // const notes = await NotesService.saveUserNotes(title, description);
        // console.log('hello worl', notes);
        const update = await NotesService.updateUserNotes(noteDTO);
        res.send(`Update from ${update} `)
        }
};