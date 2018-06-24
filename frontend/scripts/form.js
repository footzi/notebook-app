import template from '../../views/templates/note.twig';
import moment from 'moment';
import fetch from 'node-fetch';

moment.locale('ru');

class Form {
    constructor(options) {
        this.form     = options.form;
        this.notes    = options.notes;
        this.input    = this.form.querySelector('.b-form__input');
        this.textarea = this.form.querySelector('.b-form__textarea');
        this.file     = this.form.querySelector('.b-form__file');
        this.filePath = this.form.querySelector('.file-path-wrapper input');
        this.button   = this.form.querySelector('.b-form__button');
        this.category = this.form.querySelector('.b-form__select');
        //this.subCategory = this.form.querySelector('.b-form__select-subcat');
        this.route    = this.form.getAttribute('action');
        this.bindEvents();
    }

    bindEvents() {
        this.button.addEventListener('click', element => {
            element.preventDefault();
            this.getData();
            this.sendData();
            this.clear();
        });
        this.category.addEventListener('change', (e) => {
            const target = e.target;
            const value = target.options[target.selectedIndex].value
            const categoryId = JSON.stringify({value});
            this.sendToSubcategories(categoryId);
        })
    }

    sendToSubcategories(value) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        fetch('/get-subcategory', {method: 'post', body: value, headers: myHeaders})
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((json) => {
                this.createSubcategories(json);
            })
    }

    createSubcategories(data) {
        this.subCategory = this.form.querySelector('.b-form__select-subcat');
        this.subCategories = this.form.querySelectorAll('.b-form__select-subcat option');

        this.subCategories.forEach((item, index)=> {
            item.remove();
        })

        console.log(data);
        
        data.forEach((item, index)=> {
            const option = document.createElement('option');    
            option.innerHTML = item.name;
            option.value = item.categoryId;
            this.subCategory.append(option);
        })

        this.initSelectMaterialize();
    }

    getData() {
        this.formData = new FormData();
        this.formData.append('title', this.input.value);
        this.formData.append('content', this.textarea.value);
        this.formData.append('categoryId', this.category.value);
        this.formData.append('subcategoryId', this.subCategory.value);
        this.formData.append('timeCreate', moment().format('h:mm, Do MMMM YYYY'));
        this.formData.append('avatar', this.file.files[0], 'avatar.jpg');
    }

    clear() {
        this.input.value    = '';
        this.textarea.value = '';
        this.file.value     = '';
        this.filePath.value = '';
    }

    sendData() {
        fetch(this.route, { 
            method : 'POST',
            body   : this.formData,
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                res.text().then(text => alert(text))
            }
        })
        .then(json => this.insertTemplate(json))
        .catch(err => {
            console.error(err);
        })
    }

    insertTemplate(data) {
        this.notes.insertAdjacentHTML('beforeend', template(data));
    }

    initSelectMaterialize() {
        const elems = document.querySelectorAll('select');
        const instances = M.FormSelect.init(elems);
    }
}

export default Form;