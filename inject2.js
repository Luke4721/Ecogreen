const fs = require('fs');
const code = fs.readFileSync('app/page.tsx', 'utf8');
const searchString = '<section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">';
const sections = fs.readFileSync('sections.txt', 'utf8');

if (code.includes(searchString)) {
    const newCode = code.replace(searchString, sections + '\n      ' + searchString);
    fs.writeFileSync('app/page.tsx', newCode);
    console.log('Injected successfully');
} else {
    console.log('Search string not found');
}
