html_path = "shop-paints.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# I will add a script block at the very end of shop-paints.html that finds all .product-card elements
# and adds a click event listener to them.

injection_script = """
    <script>
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
    </script>
</body>
"""

html = html.replace('</body>', injection_script)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)
