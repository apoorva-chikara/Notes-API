/* eslint-disable no-console */
import mongoose from 'mongoose';

// Create DB connection
mongoose.connect('mongodb+srv://apoorva:apoorva@cluster0.x0jq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to DB');
  }).catch(console.error);

/**
 * Creating Mongoose schema to save the notes
 * title - is not neccessary to exist
 * description - keeps the body of the note
 * timestamps - includes the creation and updation time(if any)
 */

const NoteSchema = mongoose.Schema({
  description: { type: String, trim: true, required: true },
},
{
  timestamps:
     { createdAt: 'created_at' },
});

const Notes = mongoose.model('Notes', NoteSchema);

export default Notes;
