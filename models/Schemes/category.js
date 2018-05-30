import Sequelize from 'sequelize';
import connectionDB from '../../database';
import Note from './note';

const Category = connectionDB.define('categories', {
    // id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },            
    title: Sequelize.STRING,
})

Note.belongsTo(Category); //перенести //скорее всего херня в скобках означает ключ отличный от id

export default Category;