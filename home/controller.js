import bodyParser from 'body-parser';
import connectionDB from '../database';
import notes from '../models/notes';
import Note from '../models/Schemes/note';

const homeController = {

    //выводит все записи
    async renderAllNotes(req, res) {
        try {
            res.render('home', {
                notes: await notes.getAllNotes()
            })
        } catch(error) {
            throw new Error('не удалось отобразить шаблон')
        }
    },

    //сохраняет запись
    createNote(req, res) {
        res.status(200);
        res.end();
        notes.setNote(req.body);
    }
};

export default homeController;