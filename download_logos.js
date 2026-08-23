const fs = require('fs');
const https = require('https');

const clientLogos = [
  { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Oppo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/OPPO_Logo.svg' },
  { name: 'Vivo', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png' },
  { name: 'Whirlpool', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Whirlpool_Corporation_Logo.svg' },
  { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/HCL_Technologies_logo.svg' },
  { name: 'ITC Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg' },
  { name: 'Haier', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Haier_logo.svg' },
  { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Mercedes-Benz', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { name: 'Paytm', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Paytm_logo.svg' }
];

async function download() {
  for (const client of clientLogos) {
    const ext = client.url.split('.').pop();
    const filename = `public/client-logos/${client.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${ext}`;
    
    // Check if file already exists
    if (fs.existsSync(filename) && fs.statSync(filename).size > 100) {
      console.log(`Already have ${filename}`);
      continue;
    }
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay to avoid 429
    
    await new Promise((resolve, reject) => {
      https.get(client.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
        if (res.statusCode !== 200 && res.statusCode !== 301 && res.statusCode !== 302) {
           console.log(`Failed to download ${client.name} - ${res.statusCode}`);
           resolve();
           return;
        }
        
        if (res.statusCode === 301 || res.statusCode === 302) {
           https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res2) => {
             const file = fs.createWriteStream(filename);
             res2.pipe(file);
             file.on('finish', () => { file.close(); console.log(`Downloaded ${filename}`); resolve(); });
           });
           return;
        }

        const file = fs.createWriteStream(filename);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      }).on('error', (e) => {
        console.error(e);
        resolve();
      });
    });
  }
}

download();
