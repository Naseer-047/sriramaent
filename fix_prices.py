import re

html_content = open('shop-paints.html', 'r', encoding='utf-8').read()

html_content = re.sub(r'<div class="product-price">\?([0-9,]+)</div>', r'<div class="product-price">₹\1</div>', html_content)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
