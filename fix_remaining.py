import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix broken images
html = html.replace(
    'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-apex-ultima-protek-asian-paints.png',
    'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-all-protek-shyne-packshot-asian-paints.png'
)

html = html.replace(
    'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/waterproofing-smartcare-damp-proof-asian-paints.png',
    'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/neobharat.png'
)

# Fix hero button
html = html.replace(
    '<a href="#" class="btn btn-primary">',
    '<a href="shop-paints.html" class="btn btn-primary">'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Update shop-paints.html
with open('shop-paints.html', 'r', encoding='utf-8') as f:
    shop = f.read()

# Replace the old script with the new one
old_script = """    <script>
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                // Remove existing hrefs from a tags inside if any
                card.querySelectorAll('a').forEach(a => a.removeAttribute('href'));
                
                // Add click listener to the card
                card.style.cursor = 'pointer';
                card.addEventListener('click', (e) => {
                    // Prevent if clicking on add to cart or favorite
                    if (e.target.closest('.btn-add-cart') || e.target.closest('.fav-btn')) return;
                    
                    const titleEl = card.querySelector('.product-title');
                    const imgEl = card.querySelector('.product-img-wrap img');
                    const priceEl = card.querySelector('.product-price');
                    
                    if (titleEl) {
                        const title = encodeURIComponent(titleEl.innerText.trim());
                        const img = imgEl ? encodeURIComponent(imgEl.src) : '';
                        
                        let price = '1500';
                        if (priceEl && priceEl.innerText.includes('₹')) {
                            const rawPrice = priceEl.innerText.replace(/[^0-9]/g, '');
                            if (rawPrice) price = rawPrice;
                        }
                        
                        window.location.href = `product-details.html?title=${title}&img=${img}&price=${price}`;
                    }
                });
            });
        });
    </script>"""

new_script = """    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Function to attach click listeners
            const attachLink = (elements, titleSelector, imgSelector, priceSelector, excludeSelectors) => {
                elements.forEach(card => {
                    card.querySelectorAll('a').forEach(a => a.removeAttribute('href'));
                    card.style.cursor = 'pointer';
                    card.addEventListener('click', (e) => {
                        for (let sel of excludeSelectors) {
                            if (e.target.closest(sel)) return;
                        }
                        
                        const titleEl = card.querySelector(titleSelector);
                        const imgEl = card.querySelector(imgSelector);
                        const priceEl = card.querySelector(priceSelector);
                        
                        if (titleEl) {
                            const title = encodeURIComponent(titleEl.innerText.trim());
                            const img = imgEl ? encodeURIComponent(imgEl.src) : '';
                            
                            let price = '1500';
                            if (priceEl && priceEl.innerText.includes('₹')) {
                                const rawPrice = priceEl.innerText.replace(/[^0-9]/g, '');
                                if (rawPrice) price = rawPrice;
                            }
                            
                            window.location.href = `product-details.html?title=${title}&img=${img}&price=${price}`;
                        }
                    });
                });
            };

            // Regular product cards
            attachLink(
                document.querySelectorAll('.product-card'), 
                '.product-title', 
                '.product-img-wrap img', 
                '.product-price', 
                ['.btn-add-cart', '.fav-btn']
            );

            // Discounted cards
            attachLink(
                document.querySelectorAll('.disc-card'), 
                'h5', 
                'img', 
                '.new-price', 
                ['.disc-cart-btn']
            );
        });
    </script>"""

if old_script in shop:
    shop = shop.replace(old_script, new_script)
else:
    print("WARNING: Old script not found in shop-paints.html")
    # if it's slightly formatted differently, we will just replace the </body>
    import re
    shop = re.sub(r'<script>.*?DOMContentLoaded.*?</script>\s*</body>', new_script + '\n</body>', shop, flags=re.DOTALL)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(shop)

