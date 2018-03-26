import Note from '../models/Schemes/note';

const notes = {
    getAllNotes() {
        Note.findAll({raw: true}).then(notes => {
            return notes
        })
        // Note.sync({force: true})
        //     .then(()=> {
        //         return Note.create({
        //             title: 'test title-2',
        //             content: 'test body-2'
        //         })
        //     })
    }
};

//https://stackoverflow.com/questions/36214221/findall-from-sequelize-doesnt-get
export default notes;