import Note from '../models/Schemes/note';

const notes = {
    async getAllNotes() {
        try {
            return await Note.findAll({raw: true}).then(notes => notes); 
        }
        catch(error) {
            console.error(`ВЫПАЛА ОШИБКА= ${error}`);
            throw new Error();
        }
    },
    async setNote(data) {
        try {
            return await Note.create(data);
        }
        catch(error) {
            console.error(`ВЫПАЛА ОШИБКА= ${error}`);
            throw new Error();
        }
    }
};

export default notes;