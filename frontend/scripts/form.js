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
        this.note = {
            title: this.input.value,
            content: this.textarea.value,
            timeCreate: moment().format('h:mm, Do MMMM YYYY')
        }
    }

    clear() {
        this.input.value    = '';
        this.textarea.value = ''
    }

    sendData() {
        fetch('/create-note', { 
            method : 'POST',
            body   : JSON.stringify(this.note),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => this.insertTemplate(json));
    }

    insertTemplate(data) {
        this.notes.insertAdjacentHTML('beforeEnd', template(data));
    }
}

export default Form;