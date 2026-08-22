const fs = require('fs');
const code = fs.readFileSync('garbox_reconstructed.tsx', 'utf8');
const idx = code.indexOf('<section className="relative');
console.log(code.substring(idx, idx+800));
