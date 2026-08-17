import re

def update_brand_name(html):
    # Update <span class="brand-name">sriramaent</span>
    # <span class="brand-tag">colourworld</span>
    html = re.sub(
        r'<span class="brand-name">sriramaent</span>\s*<span class="brand-tag">colourworld</span>',
        r'<span class="brand-name">Sri Ram</span>\n                        <span class="brand-tag">Enterprises</span>',
        html
    )
    # Also for details page format: <span class="brand-name" style="color: #111;">sriramaent</span>
    html = re.sub(
        r'<span class="brand-name" style="color: #111;">sriramaent</span>\s*<span class="brand-tag" style="color: #555;">colourworld</span>',
        r'<span class="brand-name" style="color: #111;">Sri Ram</span>\n                <span class="brand-tag" style="color: #555;">Enterprises</span>',
        html
    )
    # Also for page titles
    html = re.sub(r'<title>Sriramaent - Bring Colour To Life</title>', r'<title>Sri Ram Enterprises - Bring Colour To Life</title>', html)
    html = re.sub(r'<title>Shop Paints - sriramaent colourworld</title>', r'<title>Shop Paints - Sri Ram Enterprises</title>', html)
    html = re.sub(r'<title>Product Details - sriramaent colourworld</title>', r'<title>Product Details - Sri Ram Enterprises</title>', html)
    return html

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

index_html = update_brand_name(index_html)

# Update Explore all products link
index_html = index_html.replace(
    '<a href="#" class="pop-banner-btn" style="display: inline-flex;">',
    '<a href="shop-paints.html" class="pop-banner-btn" style="display: inline-flex;">'
)

# Update Hero "SHOP PAINTS" button
index_html = index_html.replace(
    '<a href="#" class="btn-primary">SHOP PAINTS <span class="arrow">→</span></a>',
    '<a href="shop-paints.html" class="btn-primary">SHOP PAINTS <span class="arrow">→</span></a>'
)

# Replace images for popular products
# Note: we need to replace the src="./assets/paint-box.png" based on the product name that follows.
# Or just replace all 4 instances manually since we know the order.
# The order is:
# 1. Royale Luxury Emulsion
# 2. Apex Ultima Protek
# 3. SmartCare Damp Proof
# 4. Tractor Emulsion

img1 = 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png'
img2 = 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-apex-ultima-protek-asian-paints.png'
img3 = 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/waterproofing-smartcare-damp-proof-asian-paints.png'
img4 = 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-asian-paints.png'

# Using regex to replace the specific img srcs
index_html = re.sub(
    r'<img src="\./assets/paint-box\.png" alt="Royale Luxury Emulsion"',
    f'<img src="{img1}" alt="Royale Luxury Emulsion"',
    index_html
)

index_html = re.sub(
    r'<img src="\./assets/paint-box\.png" alt="Apex Ultima Protek"',
    f'<img src="{img2}" alt="Apex Ultima Protek"',
    index_html
)

index_html = re.sub(
    r'<img src="\./assets/paint-box\.png" alt="SmartCare Damp Proof"',
    f'<img src="{img3}" alt="SmartCare Damp Proof"',
    index_html
)

index_html = re.sub(
    r'<img src="\./assets/paint-box\.png" alt="Tractor Emulsion"',
    f'<img src="{img4}" alt="Tractor Emulsion"',
    index_html
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)

# 2. Update shop-paints.html
with open('shop-paints.html', 'r', encoding='utf-8') as f:
    shop_html = f.read()

shop_html = update_brand_name(shop_html)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(shop_html)

# 3. Update product-details.html
with open('product-details.html', 'r', encoding='utf-8') as f:
    details_html = f.read()

details_html = update_brand_name(details_html)

with open('product-details.html', 'w', encoding='utf-8') as f:
    f.write(details_html)

