const fs = require('fs');

let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

const newMathuraFrame = [
  '                <iframe ',
  '                  src="https://maps.google.com/maps?q=Bajna,Mathura,Uttar%20Pradesh&t=k&z=16&ie=UTF8&iwloc=&output=embed" ',
  '                  width="100%" ',
  '                  height="100%" ',
  '                  style={{ border: 0 }} ',
  '                  allowFullScreen={false} ',
  '                  loading="lazy" ',
  '                  className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity"',
  '                ></iframe>'
].join('\\n');

const newNoidaFrame = [
  '                <iframe ',
  '                  src="https://maps.google.com/maps?q=Kasna%20Ecotech,Greater%20Noida&t=k&z=16&ie=UTF8&iwloc=&output=embed" ',
  '                  width="100%" ',
  '                  height="100%" ',
  '                  style={{ border: 0 }} ',
  '                  allowFullScreen={false} ',
  '                  loading="lazy" ',
  '                  className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity"',
  '                ></iframe>'
].join('\\n');

const parts = code.split(/<iframe.*?<\/iframe>/s);
if (parts.length === 3) {
  code = parts[0] + newMathuraFrame + parts[1] + newNoidaFrame + parts[2];
  fs.writeFileSync('app/request-quote/page.tsx', code);
  console.log('Fixed maps in request-quote/page.tsx');
} else {
  console.log('Could not find exact iframe count. Found:', parts.length - 1);
}
