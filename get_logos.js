const fs = require('fs');
async function fetchLogos() {
  const titles = ['File:HCLTech.svg', 'File:Haier_logo.svg', 'File:ITC_Limited_Logo.svg'];
  for (const title of titles) {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=imageinfo&iiprop=url&format=json`);
    const data = await res.json();
    console.log(title, JSON.stringify(data.query.pages));
  }
}
fetchLogos();
