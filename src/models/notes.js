const mongoose = require('mongoose');
const { Schema } = mongoose;

//Create DB connection

const  dbConnection  = require('../db/dbConnection');

mongoose.connect( process.env.DB_HOST, 
                 {
                    useNewUrlParser: true, 
                    useUnifiedTopology: true,
                    useFindAndModify: false
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

const NoteSchema = mongoose.Schema ({
     tite: String,
     description: {type: String, trim: true}
},
{ timestamps: 
     { createdAt: 'created_at' }
});

const Notes = mongoose.model('Notes', NoteSchema );

module.exports = Notes;