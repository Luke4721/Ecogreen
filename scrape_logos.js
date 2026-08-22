async function getLogo(filename) {
  try {
    const res = await fetch(`https://commons.wikimedia.org/wiki/File:${filename}`);
    const text = await res.text();
    const match = text.match(/<a href="(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"]+)" class="internal"/);
    if (match) console.log(filename, match[1]);
    else console.log(filename, "Not found");
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  await getLogo('HCL_Technologies_logo.svg');
  await getLogo('Haier_logo.svg');
  await getLogo('ITC_Limited_Logo.svg');
  await getLogo('Samsung_Logo.svg');
  await getLogo('OPPO_Logo.svg');
  await getLogo('Vivo_mobile_logo.png');
  await getLogo('Whirlpool_Corporation_Logo.svg');
  await getLogo('Wipro_Primary_Logo_Color_RGB.svg');
  await getLogo('Mercedes-Logo.svg');
  await getLogo('Paytm_logo.svg');
}
run();
