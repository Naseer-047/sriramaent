const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto('http://127.0.0.1:3000/index.html', {waitUntil: 'networkidle2'});
  const langHtml = await page.evaluate(() => {
    return document.querySelector('.header-right-icons').innerHTML;
  });
  console.log('HTML:', langHtml);
  await browser.close();
})();
