import re

def add_home(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Desktop nav
    if '<li><a href="index.html"' not in html:
        desktop_regex = r'(<ul class="desktop-links">\s*)'
        html = re.sub(desktop_regex, r'\1<li><a href="index.html" style="color: inherit;">HOME</a></li>\n                ', html)
        
    # Mobile nav
    if '<ul class="menu-links">\n              <li><a href="index.html"' not in html:
        mobile_regex = r'(<ul class="menu-links">\s*)'
        html = re.sub(mobile_regex, r'\1<li><a href="index.html">HOME</a></li>\n              ', html)

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)

add_home('index.html')
add_home('shop-paints.html')

