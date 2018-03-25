import Note from '../models/note';
import bodyParser from 'body-parser';
import connectionDB from '../database';

const homeController = {

    //выводит все записи
    getAllNotes(req, res) {
        Note.findAll{
            attributes: ['foo', 'bar']
        })
    },

    //сохраняет запись
    addNote(req, res) {
        const {title, body} = req.body
        Note
            .create({title, body}, function(err, note) {
                if (err) throw err;
                res.redirect('/');        
            })
    }
};

export default homeController;