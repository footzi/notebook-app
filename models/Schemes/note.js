import Sequelize from 'sequelize';
import connectionDB from '../../database';

const Note = connectionDB.define('notes', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
})

export default Note;