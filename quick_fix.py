import re

css = open('shop.css', 'r', encoding='utf-8').read()

css = css.replace('.logo {\\n        display: flex !important;\\n        align-items: center !important;\\n    }',
                  '.logo {\\n        display: flex !important;\\n        flex-direction: row !important;\\n        align-items: center !important;\\n    }')

# Make sure logo-text aligns correctly
css = css.replace('.logo-text {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n    }',
                  '.logo-text {\\n        display: flex !important;\\n        flex-direction: column !important;\\n        justify-content: center !important;\\n        align-items: flex-start !important;\\n    }')

# And update html cache buster one more time to v6 just to be absolutely sure.
html = open('shop-paints.html', 'r', encoding='utf-8').read()
html = html.replace('shop.css?v=5', 'shop.css?v=6')

with open('shop.css', 'w', encoding='utf-8') as f:
    f.write(css)

with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html)
