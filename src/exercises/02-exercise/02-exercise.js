const path = require('path');
const fs = require('fs');
const { errorMonitor } = require('events');

/**
 * 1. Use the `path.resolve` method to build the path
 *    of the file named "names.txt" in the current folder
 *
 *    The file has an initial contents of: ana;alex;dani;alex;smith
 *
 * 2. Complete the `uppercase` function so that:
 *
 *    2.1 it reads the contents of the `names.txt` file
 *
 *    2.2 upper cases each name in the string
 *        @hint use .split() and .join()
 *
 *    2.3 joins back the result in a single string concatenated
 *        with a ; character between each name
 *
 *    2.4 writes the resulting string in the initial file
 *        such that it overwrites the contents
 *
 *    2.5 calls the `callback` parameter of the `uppercase` function
 *        with the resulting string with all the names in upper case
 *        only after writing the contents to the disk.
 */

function uppercase(callback) {
    const FILE_PATH = path.resolve(__dirname, 'names.txt');

    fs.readFile(FILE_PATH, 'utf-8', (error, data) => {
        if (error) throw error;

        const upperCasedNames = data              // string
        .split(';')                         // array
        .map((name) => name.toUpperCase())
        .join(';')                          // string

        // console.log(upperCaseNames);

        fs.writeFile(FILE_PATH, upperCasedNames, 'utf-8', (error) => {
            if (error) throw error;
            callback(upperCasedNames)
        })
    })
}

/**
 * 3. Export the `uppercase` function as a named export
 *
 * @hint
 * { a: a }
 */
module.exports = { uppercase };
