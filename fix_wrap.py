import re

css_file = 'shop.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()

# Replace category pills mobile css
pills_regex = r'\.shop-category-pills \{[^}]*flex-wrap:\s*nowrap\s*!important;[^}]*\}'
new_pills_css = """.shop-category-pills {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap !important;
        overflow-x: visible !important;
        padding-bottom: 8px !important;
        gap: 8px !important;
        width: 100% !important;
    }"""
css = re.sub(pills_regex, new_pills_css, css)

# Fix pill white-space
css = re.sub(r'(\.shop-category-pills \.pill \{[^}]*)white-space:\s*nowrap\s*!important;([^}]*\})', r'\1\2', css)

# Fix discount cards mobile css
cards_regex = r'\.discount-cards \{[^}]*overflow-x:\s*auto\s*!important;[^}]*\}'
new_cards_css = """.discount-cards {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        width: 100% !important;
        gap: 12px !important;
        overflow-x: visible !important;
    }"""
css = re.sub(cards_regex, new_cards_css, css)

# Make sure disc card fits
css = css.replace('flex: 0 0 160px !important;', '')
css = css.replace('width: 160px !important;', 'width: 100% !important;')
css = css.replace('min-width: 160px !important;', 'min-width: 0 !important;')

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

# bump html version
html_file = 'shop-paints.html'
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('shop.css?v=10', 'shop.css?v=11')
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html)
