const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

const keyframes = `
@keyframes blob {
  0% { transform: translate(-50%, -50%) scale(1); }
  33% { transform: translate(-50%, -50%) scale(1.1) rotate(10deg); }
  66% { transform: translate(-50%, -50%) scale(0.9) rotate(-10deg); }
  100% { transform: translate(-50%, -50%) scale(1); }
}
.animate-blob {
  animation: blob 10s infinite alternate ease-in-out;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
`;

if (!css.includes('@keyframes blob')) {
    css += keyframes;
    fs.writeFileSync('app/globals.css', css);
    console.log('Added blob keyframes');
}
