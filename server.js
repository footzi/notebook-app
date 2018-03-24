import express from 'express';
import twig from 'twig';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config';
import database from './database';

import Note from './models/note';

import homeController from './home/controller';

const app = express();

//отдаем статичные файлы
app.use(express.static(path.join(__dirname, '/')));

//настройка бодипарсера
app.use(bodyParser.urlencoded({ extended: true }))

//подключаем шаблонизатор, и нацелеваем на views
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set('twig options', { 
    strict_variables: false
});

//обрабатываем корневые маршруты

app.route('/')
    .get(homeController.getAllNotes)
    .post(homeController.addNote)

//подключение к БД
database()
    .then((info) => {
        console.log(`connected to database' ${info.host}:${info.port}/${info.name}`)
        //запуск сервера
        app.listen(config.PORT, () => {
            console.log(`Example app listening on port ${config.PORT}!`);
        });
    })
    .catch(() => {
        console.error('error connected');
    })