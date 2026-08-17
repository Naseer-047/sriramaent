import re

html_file = 'shop-paints.html'
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# The perfect exact home navbar with black text/icons
new_header = """    <header class="header shop-header-white">
        <div class="logo">
            <div class="logo-icon">
                <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="16" fill="#1A1A1A"/>
                    <rect x="14" y="12" width="4" height="16" rx="2" fill="#ffffff"/>
                    <rect x="22" y="12" width="4" height="16" rx="2" fill="#ffffff"/>
                </svg>
            </div>
            <div class="logo-text">
                <span class="brand-name" style="color: #111;">sriramaent</span>
                <span class="brand-tag" style="color: #555;">colourworld</span>
            </div>
        </div>
        
        <nav class="desktop-menu">
            <ul class="desktop-links">
                <li><a href="shop-paints.html" style="color: #111;">SHOP PAINTS 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><path d="M6 9l6 6 6-6"/></svg>
                </a></li>
                <li><a href="#" style="color: #111;">EXPLORE COLOURS</a></li>
                <li><a href="#" style="color: #111;">PAINT BY SPACE</a></li>
                <li><a href="#" style="color: #111;">INSPIRATION</a></li>
                <li><a href="#" style="color: #111;">OFFERS</a></li>
            </ul>
        </nav>

        <div class="header-right-icons">
            <button class="icon-btn search-icon-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
            <button class="icon-btn profile-icon-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button class="icon-btn cart-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span class="cart-badge">2</span>
            </button>
        </div>

        <button class="menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="#111" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    </header>"""

# Replace the existing header
html = re.sub(r'<header class="header shop-header-white">.*?</header>', new_header, html, flags=re.DOTALL)
html = html.replace('shop.css?v=7', 'shop.css?v=8')
html = html.replace('style.css?v=7', 'style.css?v=8')

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html)

css_file = 'shop.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()

# Desktop cart button fix
desktop_cart_css = """
/* Desktop Cart Button Fix */
.disc-cart-btn {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fdfaf3;
    border: 1px solid #737b2d;
    color: #737b2d;
    padding: 6px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 8px;
    width: 36px;
    height: 36px;
    transition: all 0.2s;
}
.disc-cart-btn:hover {
    background: #737b2d;
    color: #fff;
}
.disc-cart-btn svg {
    stroke: currentColor;
}
"""
if "Desktop Cart Button Fix" not in css:
    css = css.replace("/* --- MOBILE RESPONSIVENESS (EXACT MATCH) --- */", desktop_cart_css + "\n/* --- MOBILE RESPONSIVENESS (EXACT MATCH) --- */")
    
# Make sure shop-header-white actually has a white background
header_bg = """
.shop-header-white {
    background-color: #ffffff !important;
    border-bottom: 1px solid #eeeeee;
}
"""
if ".shop-header-white {" not in css or "background-color: #ffffff !important;" not in css:
    css = header_bg + css

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

