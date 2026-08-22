const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n');
for (let line of lines) {
  if (line.includes('INFRASTRUCTURE')) {
    const data = JSON.parse(line);
    const idx = line.indexOf('INFRASTRUCTURE');
    console.log("Context:", line.substring(idx - 100, idx + 100));
    fs.writeFileSync('extracted_line.json', line);
  }
}
