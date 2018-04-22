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
        this.button   = this.form.querySelector('.b-form__button');
        this.noteItem = this.notes.querySelector('.b-notes__item');
        this.bindEvents();
    }

    bindEvents() {
        this.button.addEventListener('click', element => {
            element.preventDefault();
            this.getData();
            this.sendData();
            this.clear();
        });
    }

    getData() {
        this.formData = new FormData();
        this.formData.append('title', this.input.value);
        this.formData.append('content', this.textarea.value);
        this.formData.append('timeCreate', moment().format('h:mm, Do MMMM YYYY'));
        console.log(this.file.files[0]);
        this.formData.append('avatar', this.file.files[0], 'avatar.jpg');
        // this.note = {
        //     title: this.input.value,
        //     content: this.textarea.value,
        //     timeCreate: moment().format('h:mm, Do MMMM YYYY'),
            
        // }
        console.log(this.formData);
    }

    // getDataImg() {
    //     this.image = {

    //     }
    // }

    clear() {
        this.input.value    = '';
        this.textarea.value = ''
    }

    sendData() {
        fetch('/create-note', { 
            method : 'POST',
            body   : this.formData
        })
        //.then(res => res.json())
        //.then(json => this.insertTemplate(json));
    }

    insertTemplate(data) {
        this.notes.insertAdjacentHTML('beforeEnd', template(data));
    }
}

export default Form;