import Sequelize from 'sequelize';
import connectionDB from '../../database';

const Category = connectionDB.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },            
    name: Sequelize.STRING,
})

export default Category;