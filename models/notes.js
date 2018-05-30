import Note from '../models/Schemes/note';
import Category from '../models/Schemes/category';

const notes = {
    async getAllNotes() {
        try {
            return await Note.findAll({
                raw: true,
                include: [Category] //либо all:true
            })
            .then(function(notes) {
                console.log(notes[0])
            }); 
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