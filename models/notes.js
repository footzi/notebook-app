import Note from '../models/Schemes/Note';
import Category from '../models/Schemes/Category';
import Subcategory from '../models/Schemes/Subcategory';
import Sequelize from 'sequelize';

const Op = Sequelize.Op


const notes = {
    async getAllNotes() {
        try {
            return await Note.findAll({
                include: [
                    { model: Category },
                    { model: Subcategory}
                ]
                        
            })
            .map(el => el.get({ plain: true }))
            .then(notes => console.log(notes)); 
        }
        catch(error) {
            console.error(`При поиске всех элементов возникла= ${error}`);
            throw new Error();
        }
    },
    async setNote(data) {
        console.log(data);
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