const fs = require('fs');
const lines = fs.readFileSync('diff_utf8.txt', 'utf8').split('\n');
let out = [];
for (let line of lines) {
  if (line.startsWith('+') && !line.startsWith('+++')) {
    out.push(line.substring(1));
  } else if (line.startsWith(' ') && !line.startsWith(' +')) {
    out.push(line.substring(1));
  }
}
fs.writeFileSync('garbox_reconstructed.tsx', out.join('\n'));
