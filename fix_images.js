const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const targetStr = `className="w-full h-full object-contain mix-blend-multiply animate-float"`;
const newStr = `className="w-full h-full object-contain mix-blend-multiply animate-float [filter:contrast(1.1)_brightness(1.05)]"`;

if (code.includes(targetStr)) {
    code = code.replace(targetStr, newStr);
    fs.writeFileSync('app/page.tsx', code);
    console.log("Added contrast/brightness filters to fix grey boxes!");
} else {
    console.log("Could not find the target string!");
}
