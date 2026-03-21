const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../site-reset-extension/icons');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const drawIcon = async (size, outputPath) => {
      await page.setViewport({ width: size, height: size });
      await page.setContent(`
        <style>
          body { 
            margin: 0; 
            background: #3b82f6; 
            border-radius: ${size * 0.2}px; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh;
            overflow: hidden;
          }
          svg { 
            color: white; 
            width: ${size * 0.6}px; 
            height: ${size * 0.6}px; 
          }
        </style>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18.3 3.3l-8 8A2 2 0 1 0 11.7 13l4.6-4.6"/><path d="M15 6L6.7 14.3a6 6 0 1 0 8.5 8.5"/><path d="M9.5 14L8 15.5 M13 18.5H16.5V22"/>
        </svg>
      `);
      // wait a tiny bit for render
      await new Promise(r => setTimeout(r, 100));
      await page.screenshot({ path: outputPath, type: 'png', omitBackground: true });
    };

    await drawIcon(16, path.join(targetDir, 'icon16.png'));
    console.log('Created icon16.png');
    
    await drawIcon(48, path.join(targetDir, 'icon48.png'));
    console.log('Created icon48.png');
    
    await drawIcon(128, path.join(targetDir, 'icon128.png'));
    console.log('Created icon128.png');

    await browser.close();
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
})();
