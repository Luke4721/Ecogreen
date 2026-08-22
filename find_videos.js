const fs = require('fs');
const html = fs.readFileSync('garbox.html', 'utf8');

const videos = [];
const regex = /<video[^>]*>[\s\S]*?<\/video>|<iframe[^>]*>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  videos.push(match[0]);
}

// Also check for elementor background videos
const bgVideos = html.match(/data-elementor-settings="[^"]*video[^"]*"/gi) || [];

console.log('Videos:', videos);
console.log('Elementor BGs:', bgVideos.map(s => s.substring(0, 100)));
