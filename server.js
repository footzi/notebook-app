import express from 'express';
import twig from 'twig';
import fs from 'fs';
import path from 'path';
import config from './config';
import Sequelize from 'sequelize';
import connectionDB from './database';
import bodyParser from 'body-parser';
import homeController from './pages/home/controller';
import noteController from './pages/note/controller';
import fileUpload from 'express-fileupload';
import randomstring from 'randomstring';

import Utils from './utils'

const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, `${__dirname}/uploads`);
//     },
//     filename: function (req, file, cb) {
//       cb(null, randomstring.generate(10) + path.extname(file.originalname));
//     }
//   })
   
//const upload = multer({ storage: storage('test') }).single('avatar')

const app = express();

app.use(fileUpload());

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
//app.post('/create-note', homeController.createNote);
app.post('/create-note', (req, res) => {
    // const filePath = `${__dirname}/uploads/avatars/test.txt`;
    // if(!req.files.avatar) {
    //     return false;
    // }
    const files = req.files.avatar
    console.log(Utils.generateFileName(req.files.avatar.name));
    // Utils.writeFile('avatars', files, function(fileName) {
    //   return fileName;
    // });
    
    // console.log(fileName);
});

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