import '../styles/app.scss'
import Form from './form';
import FormCategory from './form-category';

const form = new Form({
    form : document.querySelector('.j-form'),
    notes: document.querySelector('.j-notes')
})

const formCategory = new FormCategory({
    form : document.querySelector('.j-form-category'),
})