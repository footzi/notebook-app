import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }   
}, {
    timestamps: true
});

schema.set('toJSON', {
    virtuals: true
})

const Note = mongoose.model('Note', schema);

export default Note;