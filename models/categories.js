import Category from '../models/Schemes/category';
import Subcategory from './Schemes/Subcategory';

const categories = {
    async getAllCategories() {
        try {
            return await Category.findAll({include: [Subcategory]})
            .map(el => el.get({ plain: true }))
            .then(category => category); 
        }
        catch(error) {
            console.error(`При поиске всех элементов возникла= ${error}`);
            throw new Error();
        }
    },
    async setCategory(data) {
        try {
            return await Category.create(data);
        }
        catch(error) {
            console.error(`При сохранении элемента возникла ошибка= ${error}`);
            throw new Error(error);
        }
    },

    async setSubcategory(data) {
        try {
            return await Subcategory.create(data);
        }
        catch(error) {
            console.error(`При сохранении элемента возникла ошибка= ${error}`);
            throw new Error(error);
        }
    },

    async getSubcategory(data) {
        try {
            return await Subcategory.findAll({where: {categoryId: data}})
                .map(el => el.get({ plain: true }))
                .then(subcategories => subcategories);
        }
        catch(error) {
            console.error(`При поиске подкатегорий по id категории возникла ошибка= ${error}`);
            throw new Error(error);
        }
    }
}

export default categories;