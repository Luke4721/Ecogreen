const fs = require('fs');
let code = fs.readFileSync('components/AbstractConstruct.tsx', 'utf8');

code = code.replace(
  'type: "spring"',
  'type: "spring" as const'
);

fs.writeFileSync('components/AbstractConstruct.tsx', code);
console.log("Fixed AbstractConstruct TS error!");
