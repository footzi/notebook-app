import Sequelize from 'sequelize';
import connectionDB from '../../database';

const Note = connectionDB.define('notes', {
    title: Sequelize.STRING,
    content: {
        type: Sequelize.TEXT,
    },
    timeCreate: Sequelize.STRING,
    avatar: Sequelize.STRING
})

export default Note;