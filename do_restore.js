const fs = require('fs');
fs.copyFileSync('perfect_page.tsx', 'app/page.tsx');
console.log('Restored perfect_page.tsx');
