const fs = require('fs');

// Path to the file you want to read
const filePath = './flags.txt';

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});