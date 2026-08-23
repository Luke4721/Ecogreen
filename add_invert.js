const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const targetStr = `className="max-h-12 max-w-full object-contain"`;
const newStr = `className="max-h-12 max-w-full object-contain dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"`;

if (code.includes(targetStr)) {
    code = code.replace(targetStr, newStr);
    fs.writeFileSync('app/page.tsx', code);
    console.log("Added dark:invert to logos!");
}
