import Sequelize from 'sequelize';
import Category from './Category';
import connectionDB from '../../database';

const Note = connectionDB.define('notes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER
    },
    title: Sequelize.STRING,
    content: {
        type: Sequelize.TEXT,
    },
    timeCreate: Sequelize.STRING,
    avatar: Sequelize.STRING
})

Note.belongsTo(Category, {foreignKey: 'categoryId'});


export default Note;