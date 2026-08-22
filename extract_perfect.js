const fs = require('fs');
const transcript = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n');
for (let line of lines) {
  if (line.includes('INFRASTRUCTURE') && line.includes('CodeContent')) {
    const data = JSON.parse(line);
    if (!data.tool_calls) continue;
    for (let tc of data.tool_calls) {
      if (tc.name.includes('write_to_file') && JSON.stringify(tc.args).includes('INFRASTRUCTURE')) {
        let args = tc.args;
        if (typeof args === 'string') args = JSON.parse(args);
        if (args.TargetFile && args.TargetFile.endsWith('page.tsx') && !args.TargetFile.endsWith('perfect.js')) {
          fs.writeFileSync('perfect_page.tsx', args.CodeContent);
          console.log("Extracted perfect_page.tsx from", args.TargetFile);
        }
      }
    }
  }
}
