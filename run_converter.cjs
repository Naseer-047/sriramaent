const HTMLtoJSX = require('html-to-jsx');
const fs = require('fs');

const converter = new HTMLtoJSX({
  createClass: false
});

function portPage(inputFile, componentName, outputFile) {
    let html = fs.readFileSync('legacy_site/' + inputFile, 'utf-8');
    
    // basic extraction
    let startIdx = html.indexOf('<main');
    if (startIdx === -1) startIdx = html.indexOf('<div class="page-container"');
    if (startIdx === -1) startIdx = html.indexOf('<div class="container"');
    
    let endIdx = html.indexOf('<footer');
    
    if (startIdx !== -1 && endIdx !== -1) {
        html = html.substring(startIdx, endIdx);
    } else {
        html = "<div>Content not found</div>";
    }

    // pre-process some specific attributes we want preserved but react router Linkified
    html = html.replace(/href="index\.html"/g, 'to="/"');
    html = html.replace(/href="shop-paints\.html"/g, 'to="/shop-paints.html"');
    html = html.replace(/href="explore-colours\.html"/g, 'to="/explore-colours.html"');
    html = html.replace(/href="product-details\.html"/g, 'to="/product-details.html"');
    html = html.replace(/<a /g, '<Link ');
    html = html.replace(/<\/a>/g, '</Link>');
    // remove inline scripts
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    try {
        let jsx = converter.convert(html);
        
        let output = `import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ${componentName}() {
  const { t } = useTranslation();
  return (
    <>
${jsx}
    </>
  );
}
`;
        fs.writeFileSync('src/pages/' + outputFile, output, 'utf-8');
        console.log("Ported " + outputFile);
    } catch(e) {
        console.error("Error converting " + inputFile, e);
    }
}

portPage('index.html', 'HomePage', 'HomePage.tsx');
portPage('shop-paints.html', 'ShopPage', 'ShopPage.tsx');
portPage('explore-colours.html', 'ColoursPage', 'ColoursPage.tsx');
portPage('product-details.html', 'ProductPage', 'ProductPage.tsx');
