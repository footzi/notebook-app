import bodyParser from 'body-parser';
import connectionDB from '../database';
import notes from '../models/notes';

const homeController = {

    //выводит все записи
    getAllNotes(req, res) {
        res.render('home', {
            notes: notes.getAllNotes() 
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