import Note from '../models/Schemes/Note';
import Category from '../models/Schemes/Category';

const notes = {
    async getAllNotes() {
        try {
            return await Note.findAll({
                include: [Category]
            })
            .map(el => el.get({ plain: true }))
            .then(notes => notes); 
        }
        catch(error) {
            console.error(`При поиске всех элементов возникла= ${error}`);
            throw new Error();
        }
    },
    async setNote(data) {
        try {
            return await Note.create(data);
        }
        catch(error) {
            console.error(`При сохранении элемента возникла ошибка= ${error}`);
            throw new Error();
        }
    },
    async getNote(id) {
        try {
            return await Note.findById(id, {raw: true}).then(note => note);
        }
        catch(error) {
            console.error(`При поиске элемента возникла ошибка= ${error}`);
            throw new Error();
        }
    }
};

export default notes;