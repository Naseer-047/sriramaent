import re

css = open('shop.css', 'r', encoding='utf-8').read()

# Fix alignment for mobile discount-section
css = re.sub(r'(\.discount-section \{[^}]*flex-direction: column;)([^}]*\})', r'\1\n        align-items: stretch;\2', css)

# Make sure shop container doesn't overflow
if 'overflow-x: hidden;' not in css:
    css += '\nbody.shop-page, html { overflow-x: hidden; }\n'

with open('shop.css', 'w', encoding='utf-8') as f:
    f.write(css)

html = open('shop-paints.html', 'r', encoding='utf-8').read()
html = html.replace('shop.css?v=2', 'shop.css?v=4')
html = html.replace('style.css?v=6', 'style.css?v=7')
with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html)

