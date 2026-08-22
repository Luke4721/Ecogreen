const fs = require('fs');

const html = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #333; color: white; padding: 50px; }
  .logo {
    filter: url(#remove-white);
  }
</style>
</head>
<body>
  <svg width="0" height="0">
    <filter id="remove-white">
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        -3 -0.1 -3 0 3.1
      " />
    </filter>
  </svg>
  <img class="logo" src="http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg" />
</body>
</html>
`;

fs.writeFileSync('public/test-logo.html', html);
console.log('Saved test html');
