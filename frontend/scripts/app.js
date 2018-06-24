import '../styles/app.scss'
import Form from './form';
import FormCategory from './form-category';
import M from 'materialize-css'

const form = new Form({
    form : document.querySelector('.j-form'),
    notes: document.querySelector('.j-notes')
})

const formCategory = new FormCategory({
    form : document.querySelector('.j-form-category'),
})

const formSubcategory = new FormCategory({
    form : document.querySelector('.j-form-subcategory'),
})

const elems = document.querySelectorAll('select');
const instances = M.FormSelect.init(elems);