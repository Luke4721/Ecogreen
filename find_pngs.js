const fs = require('fs');
async function run() {
  const res = await fetch('http://goecogreen.in/');
  const html = await res.text();
  const pngs = html.match(/https?:\/\/[^"'\s]+\.png/gi);
  console.log(pngs);
}
run();
