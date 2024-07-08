const fs = require('fs');

// Path to the file you want to read
const filePath = './flags.txt';

// Asynchronous read
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// const fs = require('fs');

// // Path to the file you want to read
// const filePath = './example.txt';

// try {
//   // Synchronous read
//   const data = fs.readFileSync(filePath, 'utf8');
//   console.log('File content:', data);
// } catch (err) {
//   console.error('Error reading file:', err);
// }