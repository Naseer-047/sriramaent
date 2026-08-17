import re

# 1. Read shop-paints.html to extract the canonical header and mobile menu
with open('shop-paints.html', 'r', encoding='utf-8') as f:
    shop = f.read()

# Extract header
header_match = re.search(r'<header class="header shop-header-white">.*?</header>', shop, re.DOTALL)
header_html = header_match.group(0) if header_match else ""

# Extract mobile menu
menu_match = re.search(r'<div class="mobile-menu-overlay" id="menuOverlay"></div>.*?<script>\s*document\.addEventListener\(\'DOMContentLoaded\', \(\) => {.*?const menuOverlay = document\.getElementById\(\'menuOverlay\'\);.*?</script>', shop, re.DOTALL)
menu_html = menu_match.group(0) if menu_match else ""

# 2. Read explore-colours.html
with open('explore-colours.html', 'r', encoding='utf-8') as f:
    explore = f.read()

# Remove custom header
explore = re.sub(r'<!-- WHITE TRANSLUCENT HEADER -->\s*<header class="header shop-header-white">.*?</header>', '', explore, flags=re.DOTALL)

# Remove custom drawer
explore = re.sub(r'<!-- MOBILE MENU DRAWER.*?<div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>\s*<div class="mobile-drawer" id="mobileDrawer">.*?</div>\s*</div>', '', explore, flags=re.DOTALL)

# Remove custom script at bottom
explore = re.sub(r'<script>\s*// Simple script for the hamburger menu.*?</script>', '', explore, flags=re.DOTALL)

# Inject canonical header
explore = explore.replace('<body class="explore-page">', '<body class="explore-page">\n\n' + header_html)

# Inject canonical menu
explore = explore.replace('</body>', '\n' + menu_html + '\n</body>')

with open('explore-colours.html', 'w', encoding='utf-8') as f:
    f.write(explore)
    
print("Successfully synced header and mobile menu from shop-paints.html to explore-colours.html")
