import re

html_path = 'shop-paints.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

pattern = r'<script type="module">.*?</script>'

replacement = """<script type="module">
        import productsData from './product-data.js';
        
        document.addEventListener('DOMContentLoaded', () => {
            const productGrid = document.getElementById('productGrid');
            if (productGrid) {
                productsData.forEach(p => {
                    // Create card
                    const card = document.createElement('div');
                    card.className = 'product-card';
                    card.innerHTML = `
                        <button class="fav-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <a href="product-details.html?id=${p.id}" style="text-decoration:none; color:inherit; display:block;">
                            <div class="product-img-wrap">
                                <img src="${p.image}" alt="${p.title}">
                            </div>
                            <div class="product-badge ${p.badgeClass}">${p.badge}</div>
                            <h3 class="product-title">${p.title}</h3>
                            <div class="product-rating">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <strong>${p.rating}</strong> (${p.reviews})
                            </div>
                            <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
                            <div class="product-sizes">Sizes: ${p.sizes.map(s => s.size).join(' • ')}</div>
                        </a>
                        <button class="btn-add-cart">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                    `;
                    productGrid.appendChild(card);
                });
            }
        });
    </script>"""

html = re.sub(pattern, replacement, html, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
