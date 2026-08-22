const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(/animate=\{\{ height: \\\`\\\\\$\\{h\\}%\\\` \}\}/g, 'animate={{ height: `${h}%` }}');
code = code.replace(/animate=\{\{ height: \\`\\$\\{h\\}%\\` \}\}/g, 'animate={{ height: `${h}%` }}');
code = code.replace(/src=\{\\\`https:\/\/www\.google\.com\/s2\/favicons\?domain=\\\\\$\{client\.domain\}&sz=128\\\`\}/g, 'src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}');
code = code.replace(/src=\{\\`https:\/\/www\.google\.com\/s2\/favicons\?domain=\\$\{client\.domain\}&sz=128\\`\}/g, 'src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}');
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');

fs.writeFileSync('app/page.tsx', code);
