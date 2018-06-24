import fetch from 'node-fetch';

class FormCategory {
    constructor(options) {
        this.form   = options.form;
        this.input  = this.form.querySelector('.b-form__input');
        this.button = this.form.querySelector('.b-form__button');
        this.route  = this.form.getAttribute('action');
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
        this.formData = new FormData(this.form);
    }

    clear() {
        this.input.value = '';
    }

    sendData() {
        fetch(this.route, { 
            method : 'POST',
            body   : this.formData,
        })
        .then(res => {
            if (res.ok) {
                alert("Категория успешно сохранена!")
            } else {
                res.text().then(text => alert("Ошибка при сохранении категории"))//нужно куда то выводить текст ошибки
            }
        })
        .catch(err => {
            alert(err);
        })
    }
}

export default FormCategory;