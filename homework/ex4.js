const fs = require('fs');
const filePath = './ex4.txt';
function writeFileWithCallback(filePath, callback) {
    fs.writeFile(filePath, 'utf8', (err) => {
        callback(err);
    });
}

function handleWriteResult(err) {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
}

writeFileWithCallback(filePath,  handleWriteResult);
