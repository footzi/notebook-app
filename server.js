import express from 'express';
import twig from 'twig';
import path from 'path';
import config from './config';
import Sequelize from 'sequelize';
import connectionDB from './database';
import bodyParser from 'body-parser';
import homeController from './pages/home/controller';
import noteController from './pages/note/controller';

const app = express();

//отдаем статичные файлы
app.use(express.static(path.join(__dirname, '/')));

//настройка бодипарсера
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//подключаем шаблонизатор, и нацелеваем на views
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set('twig options', { 
    strict_variables: false
});

//обрабатываем маршруты
app.get('/', homeController.renderAllNotes);
app.post('/create-note', homeController.createNote);
app.get('/notes/:noteId', noteController.renderNote);

//Синхронизаниця с БД
// connectionDB.sync({
//     force: true,
//     logging: console.log
// });

//подключение к БД
connectionDB
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
});