import Note from '../models/note';
import bodyParser from 'body-parser';

const homeController = {

    //выводит все записи
    getAllNotes(req, res) {
        Note
            .find()
            .exec((err, notes) => {
                if (err) throw err;
                res.render('home', {
                    notes
                });
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