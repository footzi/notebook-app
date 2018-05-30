import Category from '../models/Schemes/category';

const categories = {
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