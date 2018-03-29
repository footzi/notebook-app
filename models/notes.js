import Note from '../models/Schemes/note';

const notes = {
    getAllNotes() {
        return Note.findAll({raw: true})
            .then(notes=> {
                return notes;
            })
            .catch(error => {
                throw new Error('не удалось получить данные из БД')
            })
    },

    setNote(data) {
        return Note.create(data, function(err, note) {
                if (err) throw err;        
            })
    }
};

export default notes;