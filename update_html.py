import re

html_content = open('shop-paints.html', 'r', encoding='utf-8').read()

# 1. Update Header to translucent white & height 40px
# We will just replace the header block
new_header = '''
    <!-- WHITE TRANSLUCENT HEADER -->
    <header class="header shop-header-white">
        <div class="logo">
            <div class="mobile-hamburger">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </div>
            <img src="https://static.asianpaints.com/content/dam/asian_paints/logo/ap-logo-new.png" alt="Asian Paints" class="shop-ap-logo">
        </div>
        
        <nav class="desktop-menu">
            <ul class="desktop-links">
                <li><a href="index.html">HOME</a></li>
                <li><a href="shop-paints.html" class="active-link">SHOP PAINTS 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><path d="M6 9l6 6 6-6"/></svg>
                </a></li>
                <li><a href="#">EXPLORE COLOURS</a></li>
                <li><a href="#">PAINT VISUALIZER</a></li>
                <li><a href="#">OFFERS</a></li>
            </ul>
        </nav>

        <div class="header-right-icons">
            <button class="icon-btn search-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
            <button class="icon-btn profile-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button class="icon-btn cart-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span class="cart-badge">2</span>
            </button>
        </div>
    </header>
    
    <div class="mobile-search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" placeholder="Search paints, colours, products...">
    </div>
'''

html_content = re.sub(r'<header class="header".*?</header>', new_header, html_content, flags=re.DOTALL)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
