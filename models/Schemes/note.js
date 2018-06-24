import Sequelize from 'sequelize';
import Category from './Category';
import connectionDB from '../../database';
import Subcategory from './Subcategory';

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
    subcategoryId: {
        type: Sequelize.INTEGER
    },
    title: Sequelize.STRING,
    content: {
        type: Sequelize.TEXT,
    },
    timeCreate: Sequelize.STRING,
    avatar: Sequelize.STRING
});

Note.belongsTo(Category, {foreignKey: 'categoryId'});
Note.belongsTo(Subcategory, {foreignKey: 'subcategoryId'});

export default Note;