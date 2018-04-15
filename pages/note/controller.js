import notes from '../../models/notes';

const noteController = {
    renderNote(req, res) {
        notes.getNote(req.params.noteId)
            .then(resolve => {
                res.render('note', {
                    note: resolve
                })
            })
            .catch(reject =>  {
                console.log('ошибка при получение записи');
                res.status(500);
                res.end();
            })
    }
}

export default noteController;