import notes from '../../models/notes'
import categories from '../../models/categories';
import Utils from '../../utils'

const homeController = {

    renderHomePage(req, res) {
        let data = [];
        async function test() {
                return notes.getAllNotes()
                    .then(resolve => resolve)
        }

        // async getAllNotes() {
        //     return await notes.getAllNotes()
        //         .then((resolve) => {
                
        //         return resolve
        //         })
        // }
        

        test().then(test => data.push(test));

        console.log(data)

       
        res.end()
        

    },
    //выводит все записи
    renderAllNotes(req, res) {
        notes.getAllNotes()
            .then((resolve)=> {
                res.render('home', {
                    notes: resolve,
                    categories: [{id: "1"},{id: "2"}]
                })
            })
            .catch((err)=> {
                console.log('ошибка при получении записей' + err);
                res.status(500);
                res.end();
            })
    },

    //сохраняет запись
    createNote(req, res) {        
        let image = {};
        let file = '';
        let fileName = '';
        const catalog = 'uploads/avatars/';

        if (req.files === null) {
            image.avatar = '';

        } else {
            file = req.files.avatar;
            fileName = Utils.generateFileName(req.files.avatar.name);
            image.avatar = catalog + fileName;
        }
        const data = Object.assign(req.body, image);

        Utils.writeFile(catalog, file, fileName)
            .catch(err => {
                console.log('Ошибка при сохранении данных ' + err);
                const error = {
                    type: 'Ошибка при записи файла',
                    text: err
                }
                res.status(500).send(error);
            })
        
        notes.setNote(data)
            .then((json) => {
                res.json(json);
                res.status(200).end();
            })
            .catch((err) => {
                console.log('Ошибка при сохранении данных ' + err);// Не знаю как имитировать
                res.status(500).send(err);
            })
    },

    //Создает новую категорию
    createCategory(req, res) {
        categories.setCategory(req.body)
            .then(()=> res.send(200))
            .catch((err) => {
                console.log('Ошибка при сохранении данных ' + err)
                res.status(500).send(err); //на фронте не понятно как распарсить ошибку, это объект
            })
    }
};

export default homeController;