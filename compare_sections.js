const fs = require('fs');
const cheerio = require('cheerio');
const contentRef = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/steps/1256/content.md', 'utf8');
const htmlRef = contentRef.split('---')[1];
const $ = cheerio.load(htmlRef);

console.log('--- REFERENCE SITE SECTIONS ---');
let i = 0;
$('.elementor-section.elementor-top-section').each((_, el) => {
  const text = $(el).text().replace(/\s+/g, ' ').trim().substring(0, 150);
  if (text.length > 10) console.log('Section ' + (i++) + ':', text);
});

const contentLive = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/steps/1252/content.md', 'utf8');
const htmlLive = contentLive.split('---')[1];
const $live = cheerio.load(htmlLive);

console.log('\n--- LIVE SITE SECTIONS ---');
$live('section').each((j, el) => {
  const text = $live(el).text().replace(/\s+/g, ' ').trim().substring(0, 150);
  if (text.length > 10) console.log('Section ' + j + ':', text);
});
