import Sequelize from 'sequelize';
import connectionDB from '../../database';
import Subcategory from './Subcategory';

const Category = connectionDB.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },            
    name: Sequelize.STRING,
})

Category.belongsToMany(Subcategory, {through: 'categoryId'});



export default Category;