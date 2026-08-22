const fs = require('fs');
const diff = fs.readFileSync('diff.txt', 'utf16le');
fs.writeFileSync('diff_utf8.txt', diff, 'utf8');
