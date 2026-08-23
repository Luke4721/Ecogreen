const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(
    'setScrolled(window.scrollY > 50);',
    'setScrolled(window.scrollY > (window.innerHeight - 100));'
);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed scroll threshold!');
