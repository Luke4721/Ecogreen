const http = require('http');
http.get('http://goecogreen.in/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^"]+)"[^>]*>/gi);
    if(matches) matches.forEach(m => console.log(m));
  });
});
