const fs = require('fs');
const cheerio = require('cheerio');
const htmlRef = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/steps/1256/content.md', 'utf8').split('---')[1];
const $ = cheerio.load(htmlRef);

$('img').each((i, el) => {
   const src = $(el).attr('src');
   if (src && !src.includes('svg') && !src.includes('logo')) {
       console.log(src);
   }
});
