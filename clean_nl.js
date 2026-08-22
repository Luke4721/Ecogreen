const fs = require('fs');
let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

// The simplest way to fix the syntax error is to just write the file completely from scratch or fix the iframe block
code = code.replace(/<iframe \\n/g, '<iframe \n');
code = code.replace(/" \\n/g, '" \n');
code = code.replace(/} \\n/g, '} \n');
code = code.replace(/false} \\n/g, 'false} \n');
code = code.replace(/lazy" \\n/g, 'lazy" \n');
code = code.replace(/transition-opacity"\\n/g, 'transition-opacity"\n');
code = code.replace(/transition-opacity" \\n/g, 'transition-opacity"\n');
code = code.replace(/\\n/g, ' '); // just wipe out any leftover literal \n

fs.writeFileSync('app/request-quote/page.tsx', code);
