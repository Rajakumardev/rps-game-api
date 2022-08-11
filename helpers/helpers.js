
const fs = require('fs');

module.exports = {
    readDataStore: (file) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
    writeDataStore: (file, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(file, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}