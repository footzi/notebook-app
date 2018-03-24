import template from '../../views/templates/note.twig';

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
        this.button.addEventListener('click', this.getData.bind(this));
    }

    getData() {
        this.note = {
            title: this.input.value,
            body : this.textarea.value
        }
        console.log(this.note);

        this.insertTemplate();
    }

    insertTemplate() {
        this.notes.insertAdjacentHTML('beforeEnd', template(this.note));
    }
}

export default Form;