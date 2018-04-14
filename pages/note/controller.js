import bodyParser from 'body-parser';
import connectionDB from '../../database';
import notes from '../../models/notes';
import Note from '../../models/Schemes/note';

const noteController = {
    renderNote(req, res) {
        res.send(req.params)
    }
}

export default noteController;