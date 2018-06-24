import Sequelize from 'sequelize';
import Category from './Category';
import Note from './Note';
import connectionDB from '../../database';

const Subcategory = connectionDB.define('subcategories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },            
    categoryId: {
        type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
})

//Subcategory.hasMany(Category, {foreignKey: 'id'});

export default Subcategory;