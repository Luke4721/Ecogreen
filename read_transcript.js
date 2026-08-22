const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/logs/transcript.jsonl', 'utf8');
const lines = transcript.split('\n');
for (let i = 0; i < Math.min(20, lines.length); i++) {
  try {
    if (!lines[i]) continue;
    const data = JSON.parse(lines[i]);
    if (data.type === 'USER_INPUT') {
      console.log('--- USER INPUT ---');
      console.log(data.content);
    }
  } catch (e) {}
}
