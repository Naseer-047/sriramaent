import re

with open('src/styles/legacy/product-details.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('.details-page {', '.details-page main {')

with open('src/styles/legacy/product-details.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated product-details.css media query")
