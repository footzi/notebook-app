import Sequelize from 'sequelize';
import connectionDB from '../../database';

const Note = connectionDB.define('notes', {
    // id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },  
    // category_id: {
    //     type: Sequelize.INTEGER
    // },
    title: Sequelize.STRING,
    content: {
        type: Sequelize.TEXT,
    },
    timeCreate: Sequelize.STRING,
    avatar: Sequelize.STRING
})

export default Note;