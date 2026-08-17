import re

css_file = 'shop.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()

# Fix 100vw in category pills
css = re.sub(r'width:\s*100vw\s*!important;', 'width: auto !important;', css)
css = re.sub(r'width:\s*100vw;', 'width: auto !important;', css)

# Fix 100vw in discount cards
css = re.sub(r'width:\s*calc\(100vw - 32px\)\s*!important;', 'width: auto !important;\\n        margin-right: -16px !important;', css)

# Fix horizontal overflow on body specifically for webkit
if 'overflow-x: hidden;' in css:
    css = css.replace('body.shop-page {\\n        overflow-x: hidden;\\n    }', 'body, html {\\n        overflow-x: hidden !important;\\n        width: 100%;\\n        max-width: 100%;\\n    }')

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

# bump html version
html_file = 'shop-paints.html'
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('shop.css?v=9', 'shop.css?v=10')
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html)
