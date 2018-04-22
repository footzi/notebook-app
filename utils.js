import fs from 'fs';
import path from 'path';
import randomstring from 'randomstring';

//Разобраться с классами!
const Utils = {
    writeFile(catalog, files, callback) {
        const filePath = `uploads/${catalog}/`;
        const fileName =  randomstring.generate(10) + path.extname(files.name);
        callback(fileName);
        fs.writeFile(filePath + fileName, files.data, (err)=> {
            console.log(err);
        })
    }
}

export default Utils;