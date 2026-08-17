import json
import re

html_content = open('shop-paints.html', 'r', encoding='utf-8').read()

try:
    data = json.load(open('products.json', 'r', encoding='utf-8'))
except:
    data = []

cards_html = ''
for i, item in enumerate(data[:12]):
    name = item.get('productName', 'Paint Product')
    price = item.get('livePrice', '999')
    img = 'https://static.asianpaints.com' + item.get('productPackshotImage', '')
    cat = item.get('category', 'Interior')
    
    cards_html += f'''
                    <div class="product-card">
                        <button class="fav-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <div class="product-img-wrap">
                            <img src="{img}" alt="{name}" onerror="this.src='https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Nilaya-Arc-Matt-new.png'">
                        </div>
                        <div class="product-badge badge-interior">{cat}</div>
                        <h3 class="product-title">{name}</h3>
                        <div class="product-rating">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <strong>4.{8 - i%3}</strong> ({120 + i*15})
                        </div>
                        <div class="product-price">?{price}</div>
                        <div class="product-sizes">Available Sizes: 1L &bull; 4L &bull; 10L &bull; 20L</div>
                        <button class="btn-add-cart">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                    </div>
'''

# Use regex to find and replace the product-grid div correctly
pattern = r'<div class="product-grid">.*?</section>'
replacement = f'<div class="product-grid">\\n{cards_html}</div>\\n<!-- Help CTA Banner -->\\n<div class="help-cta-banner">\\n<div class="help-cta-info">\\n<div class="help-cta-icon">\\n<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>\\n</div>\\n<div class="help-cta-text">\\n<h4>Need help choosing the right paint?</h4>\\n<p>Not sure which paint is perfect for your home? Talk to our store team for expert advice.</p>\\n</div>\\n</div>\\n<button class="btn-whatsapp">\\n<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>\\nChat on WhatsApp\\n</button>\\n</div>\\n</section>'
new_html = re.sub(pattern, replacement, html_content, flags=re.DOTALL)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
