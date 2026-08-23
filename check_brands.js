const https = require('https');
const fs = require('fs');

const brands = ['samsung', 'oppo', 'vivo', 'whirlpool', 'hcl', 'itc', 'haier', 'wipro', 'mercedes', 'paytm'];

brands.forEach(brand => {
    const req = https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/' + brand + '.svg', (res) => {
        if (res.statusCode === 200) {
            console.log(brand, 'exists');
        } else {
            console.log(brand, 'DOES NOT EXIST', res.statusCode);
        }
    });
});
