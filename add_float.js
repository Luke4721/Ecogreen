const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const keyframes = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
`;

if (!css.includes('@keyframes float')) {
    css += keyframes;
    fs.writeFileSync('app/globals.css', css);
    console.log('Added float keyframes');
}
