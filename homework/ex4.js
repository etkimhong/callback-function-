const fs = require('fs');
const filePath = './ex4.txt';
function writeFileAsync(filePath, contentCallback) {
    // Get the content to write from the callback
    const content = contentCallback();

    // Write the content to the file asynchronously
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('An error occurred while writing the file:', err);
        } else {
            console.log('File written successfully!');
        }
    });
}

// Example usage:

writeFileAsync(filePath, () => {
    return 'and hiii';
});