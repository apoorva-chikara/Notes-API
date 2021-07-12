/* eslint-disable import/extensions */
import NotesFetchService from '../services/getNotes.service.js';

const fetchNotes = async (req, res) => {
  try {
    const notes = await NotesFetchService.getAllNotes();
    res.send(notes);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

export default fetchNotes;
