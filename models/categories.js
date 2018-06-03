import Category from '../models/Schemes/category';

const categories = {
    async getAllCategories() {
        try {
            return await Category.findAll({raw: true})
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
    }
}

export default categories;