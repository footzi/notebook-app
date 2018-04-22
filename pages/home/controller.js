import notes from '../../models/notes'


const homeController = {
    //выводит все записи
    renderAllNotes(req, res) {
        notes.getAllNotes()
            .then((resolve)=> {
                res.render('home', {
                    notes: resolve
                })
            })
            .catch((reject)=> {
                console.log('ошибка при получении данных');
                res.status(500);
                res.end();
            })
    },

    //сохраняет запись
    createNote(req, res) {
        console.log(req.body);
        // notes.setNote(req.body)
        //     .then((resolve) => {
        //         res.json(resolve);
        //         res.status(200);
        //         res.end();
        //     })
        //     .catch((reject) => {
        //         console.log('ошибка при сохранении данных');
        //         res.status(500);
        //         res.end();
        //     })
    }
};

export default homeController;