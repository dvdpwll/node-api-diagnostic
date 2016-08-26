// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

const sumLines = (filename, callback) => {
  let sum = 0;
  fs.readFile(filename, {encoding: 'utf8'}, (error, data) => {
    if (error) {
      console.error(error.stack);
      callback(new Error('file not found'));
      return;
    }

    try {
      let numbers = data.split('\n');
      numbers.filter(e => e !== '').forEach((num) => {
        if (Number(num)) {
          sum += Number(num);
        }
      });
      console.log(sum);
    }
    catch (error) {
      console.error(error.stack);
      callback(new Error('line not a number'));
      return;
    }
  });

  callback(null, sum);
};

module.exports = {
  sumLines,
};
