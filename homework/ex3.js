const fs = require('fs');
const filePath = './ex4.txt';

let read = (filePath, callback)=>{
    fs.readFile(filePath, 'utf-8', (err,data)=>{
        if(err){
            callback(err, null);
            return
        }
        callback(null, data);
    });
};

let print = (err, data)=>{
    if(err){
        console.error('Error reading file:', err);
    }
    else{
        console.log("files is reading", data);
    }
}
read(filePath, print);

