// TODO: What are we importing?
// imports file system
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// the log.txt is the path and the process.argv is the data (placeholder of the data)
// Displays data on a new line in the path
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // Checking to see if there is an error, else then the log.txt is created
  err ? console.error(err) : console.log('Commit logged!')
);
