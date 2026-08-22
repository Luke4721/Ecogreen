const fs = require('fs');
let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

// There are multiple `import Link from 'next/link';` or `"next/link"`.
const match1 = code.match(/import Link from ["']next\/link["'];/g);
if (match1 && match1.length > 1) {
  // Replace the first occurrence
  code = code.replace(/import Link from ["']next\/link["'];/, '');
}
fs.writeFileSync('app/request-quote/page.tsx', code);
