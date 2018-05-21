import fs from 'fs';
import path from 'path';
import randomstring from 'randomstring';

//Разобраться с классами!
const Utils = {
    writeFile(catalog, file, fileName) {
        return new Promise((resolve, reject) => {
            fs.writeFile(catalog + fileName, file.data, (err)=> {
                if(err) {
                    reject(err)
                }
            })
        })
    },

    generateFileName(name) {
        return randomstring.generate(10) + path.extname(name);
    }
}
 
export default Utils;