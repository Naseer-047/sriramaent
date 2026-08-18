import fs from 'fs';

const data = JSON.parse(fs.readFileSync('scratch/ap_data_debug.json', 'utf8'));

// Filter to unique titles with valid images
const unique = [];
const seen = new Set();
for (const p of data.productsExtracted) {
  if (p.img && p.img.length > 5 && !seen.has(p.title)) {
    seen.add(p.title);
    
    // Fix image URL if protocol-relative
    let finalImg = p.img;
    if (finalImg.startsWith('//')) {
      finalImg = 'https:' + finalImg;
    }
    
    unique.push({ ...p, img: finalImg });
  }
}

let tsContent = 'const productsData = [\n';

unique.forEach((p, i) => {
  const id = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const category = p.title.toLowerCase().includes('tractor') ? 'budget' : (p.title.toLowerCase().includes('royale') || p.title.toLowerCase().includes('nilaya') ? 'luxury' : 'premium');
  const price1L = category === 'budget' ? 350 : (category === 'luxury' ? 950 : 550);
  const badge = category === 'budget' ? 'Budget' : (category === 'luxury' ? 'Premium' : 'Bestseller');
  
  tsContent += `  {
    id: '${id}',
    title: '${p.title.replace(/'/g, "\\'")}',
    subtitle: 'Interior Wall Paint',
    category: 'interior',
    badge: '${badge}',
    badgeClass: 'badge-interior',
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50,
    price: ${price1L * 4 - 100},
    oldPrice: ${price1L * 4 + 250},
    discount: '12% OFF',
    sizes: [
      { size: '1L', price: ${price1L} },
      { size: '4L', price: ${price1L * 4 - 100} },
      { size: '10L', price: ${price1L * 10 - 300} },
      { size: '20L', price: ${price1L * 20 - 1000} }
    ],
    details: 'Experience a smooth and rich finish with ${p.title.replace(/'/g, "\\'")}. Highly durable and specially formulated to keep your interior walls looking beautiful for years.',
    howToApply: 'Step 1: Sand the surface.\\nStep 2: Apply Primer.\\nStep 3: Apply Putty.\\nStep 4: Apply 2 coats of paint.',
    specifications: [
      { label: 'Coverage', value: '130 - 150 sq.ft/ltr/coat' },
      { label: 'Drying Time', value: '30 min' },
      { label: 'Sheen Level', value: '${category === "luxury" ? "Soft Sheen" : "Matte"}' }
    ],
    image: '${p.img}'
  }${i === unique.length - 1 ? '' : ','}\n`;
});

tsContent += '];\n\nexport default productsData;\n';

fs.writeFileSync('src/data/product-data.ts', tsContent);
console.log('Generated product-data.ts with ' + unique.length + ' products.');
