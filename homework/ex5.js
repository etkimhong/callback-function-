const fs = require('fs');

// Function to read a file asynchronously
function readFileAsync(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        callback(data);
    });
}

// Function to write to a file asynchronously
function writeFileAsync(filePath, data, callback) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        callback();
    });
}

// Step 1: Read the content of 'input.txt'
readFileAsync('./input.txt', (data) => {
    // Step 2: Append "First modification" to the content and write to 'output1.txt'
    let modifiedData = data + 'First modification\n';
    writeFileAsync('./output1.txt', modifiedData, () => {
        // Step 3: Read 'output1.txt'
        readFileAsync('./output1.txt', (data) => {
            // Append "Second modification" to the content and write to 'output2.txt'
            modifiedData = data + 'Second modification\n';
            writeFileAsync('./output2.txt', modifiedData, () => {
                // Step 4: Finally, read 'output2.txt' and print the content to the console
                readFileAsync('./output2.txt', (data) => {
                    console.log(data);
                });
            });
        });
    });
});
