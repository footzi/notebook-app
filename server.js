import express from 'express';
import twig from 'twig';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config';
import Sequelize from 'sequelize';
import connectionDB from './database';

import Note from './models/note';

import homeController from './home/controller';

const app = express();

//отдаем статичные файлы
app.use(express.static(path.join(__dirname, '/')));

//настройка бодипарсера
app.use(bodyParser.urlencoded({ extended: true }));

//подключаем шаблонизатор, и нацелеваем на views
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set('twig options', { 
    strict_variables: false
});

//обрабатываем корневые маршруты

app.route('/')
    .get(homeController.getAllNotes)
    //.post(homeController.addNote)




//подключение к БД




// Note.create({
//     title: 'test title',
//     content: 'test body'
// })

// Article.findById(2).then((article => {
//     console.log(article.dataValues);
// }))

connectionDB
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });

//connectionDB.sync();

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
});