import bodyParser from 'body-parser';
import connectionDB from '../database';
import notes from '../models/notes';
import Note from '../models/Schemes/note';

const homeController = {

    //выводит все записи
    renderAllNotes(req, res) {
        notes.getAllNotes().then(function(notes) {
            res.render('home', {
                notes: notes
            })
        })
    },

    //сохраняет запись
    addNote(req, res) {
        const {title, body} = req.body;
        Note
            .create({title, body}, function(err, note) {
                if (err) throw err;
                res.redirect('/');        
            })
    }
};

export default homeController;