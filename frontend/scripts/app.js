import '../styles/app.scss'
import Form from './form';

// document.ready(function() {
//     M.updateTextFields();
//   });

const form = new Form({
    form : document.querySelector('.b-form'),
    notes: document.querySelector('.b-notes')
})