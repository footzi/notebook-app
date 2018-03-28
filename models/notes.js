import Note from '../models/Schemes/note';

const notes = {
    getAllNotes() {
        return Note.findAll({raw: true})
            .then(notes=> {
                return notes;
            })
    }
};

export default notes;