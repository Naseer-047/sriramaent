import re

html_content = open('shop-paints.html', 'r', encoding='utf-8').read()

# Fix encoding artifacts ? instead of ₹ and ✨
html_content = html_content.replace('Discounted ?', 'Discounted ✨')
html_content = html_content.replace('?1,', '₹1,').replace('?2,', '₹2,').replace('?3,', '₹3,').replace('?4,', '₹4,').replace('?5,', '₹5,')
html_content = html_content.replace('₹1,000', '₹1,000').replace('?8', '₹8').replace('?9', '₹9') # Generic fix for prices
html_content = re.sub(r'\?([0-9,]+)', r'₹\1', html_content)

# Fix Logo
new_logo = '''
        <div class="logo" style="display: flex; align-items: center;">
            <div class="mobile-hamburger" style="margin-right: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </div>
            <div class="logo-text">
                <span class="brand-name" style="color: #111; font-weight: 800; font-size: 20px; letter-spacing: -1px;">sriramaent</span>
                <span class="brand-tag" style="color: #666; font-size: 11px; font-weight: 600; display: block;">colourworld</span>
            </div>
        </div>
'''
html_content = re.sub(r'<div class="logo">.*?</div>\s*<img[^>]+>', new_logo, html_content, flags=re.DOTALL)
html_content = re.sub(r'<div class="logo">\s*<div class="mobile-hamburger">.*?</div>\s*</div>', new_logo, html_content, flags=re.DOTALL)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

css_content = open('shop.css', 'r', encoding='utf-8').read()
css_content += '''
/* Fixes */
.disc-cart-btn {
    align-self: flex-start;
    border-radius: 50% !important;
    width: 36px !important;
    height: 36px !important;
    background: #fdfaf3 !important;
    border: 1px solid #737b2d !important;
}
.mobile-search-bar {
    width: 100%;
    box-sizing: border-box;
}
.mobile-search-bar input {
    box-sizing: border-box;
    width: 100%;
}
.logo-text { line-height: 1.1; }
@media (min-width: 992px) {
    .mobile-hamburger { display: none !important; }
}
'''
with open('shop.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

