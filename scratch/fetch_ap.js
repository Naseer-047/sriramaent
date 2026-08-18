import * as cheerio from 'cheerio';
import fs from 'fs';

async function scrape() {
  try {
    const res = await fetch('https://www.asianpaints.com/paint-products/interior-wall-paints/plain-finishes.html');
    const html = await res.text();
    const $ = cheerio.load ? cheerio.load(html) : cheerio.default.load(html);
    
    const products = [];
    
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.includes('paint-products') && href.includes('.html')) {
        const title = $(el).find('h3, h4, .title, .card-title, .title-wrapper').text().trim() || $(el).text().trim();
        let img = $(el).find('img').attr('data-src') || $(el).find('img').attr('src') || '';
        
        // Only keep if looks like a product (has a title and potentially an image)
        if (title && title.length > 3 && title.length < 100) {
          products.push({ title, href, img });
        }
      }
    });

    let state = [];
    $('script').each((i, el) => {
      const htmlContent = $(el).html();
      if (htmlContent && htmlContent.includes('window.__INITIAL_STATE__')) {
         state.push(htmlContent.substring(0, 1000));
      }
    });

    fs.writeFileSync('scratch/ap_data_debug.json', JSON.stringify({
      productsExtracted: products,
      initialState: state.length > 0 ? true : false
    }, null, 2));

    console.log('Wrote to scratch/ap_data_debug.json');
  } catch (err) {
    console.error(err);
  }
}

scrape();
