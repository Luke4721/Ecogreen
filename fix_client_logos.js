const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// Replace clearbit logos with google favicons
code = code.replace(
  /https:\/\/logo\.clearbit\.com\/([a-z0-9.-]+)/g,
  'https://www.google.com/s2/favicons?domain=$1&sz=128'
);

// Remove the onError fallbacks that were hardcoded
code = code.replace(
  /onError=\{\(e\) => \{.*?\}\}/g,
  ''
);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed client logos');
