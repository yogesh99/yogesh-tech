const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    
    // We assume the dev server handles public/hero.html correctly. 
    // If not, we can load it from file directly:
    const fileUrl = 'file:///' + __dirname.replace(/\\/g, '/') + '/public/hero.html';
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    await page.screenshot({ path: 'public/reset-site-hero.png' });
    console.log('Successfully captured screenshot at public/reset-site-hero.png');
    await browser.close();
  } catch(e) {
    console.error('Puppeteer failed:', e);
    process.exit(1);
  }
})();
