import re
html_content = open('shop-paints.html', 'r', encoding='utf-8').read()
new_html = html_content.replace('<a href="#" class="view-product">View Product <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>', '<button class="disc-cart-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></button>')
with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
