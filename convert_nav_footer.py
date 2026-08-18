import re

def html_to_jsx(html):
    html = html.replace('class="', 'className="')
    html = html.replace('for="', 'htmlFor="')
    html = re.sub(r'<(br|hr|img)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    html = html.replace('stroke-width', 'strokeWidth')
    html = html.replace('stroke-linecap', 'strokeLinecap')
    html = html.replace('stroke-linejoin', 'strokeLinejoin')
    
    def style_replacer(match):
        style_str = match.group(1)
        rules = [r.strip() for r in style_str.split(';') if r.strip()]
        react_rules = []
        for r in rules:
            if ':' in r:
                k, v = r.split(':', 1)
                k = k.strip()
                v = v.strip().replace("'", '"')
                k_parts = k.split('-')
                k_camel = k_parts[0] + ''.join(x.title() for x in k_parts[1:])
                react_rules.append(f"{k_camel}: '{v}'")
        return 'style={{ ' + ', '.join(react_rules) + ' }}'
    
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    html = re.sub(r'onclick="([^"]*)"', r'onClick={() => {\1}}', html)
    
    # replace HTML links with React router Links
    html = html.replace('href="index.html"', 'to="/"')
    html = html.replace('href="shop-paints.html"', 'to="/shop-paints.html"')
    html = html.replace('href="explore-colours.html"', 'to="/explore-colours.html"')
    html = html.replace('href="product-details.html"', 'to="/product-details.html"')
    html = html.replace('<a ', '<Link ')
    html = html.replace('</a>', '</Link>')
    
    # Handle SVGs
    html = html.replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '')
    html = html.replace('clip-rule', 'clipRule')
    html = html.replace('fill-rule', 'fillRule')
    
    # SVG path that is self-closing
    html = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', html)
    # Circle self closing
    html = re.sub(r'<circle([^>]*?)(?<!/)>', r'<circle\1 />', html)
    # rect self closing
    html = re.sub(r'<rect([^>]*?)(?<!/)>', r'<rect\1 />', html)
    # use self closing
    html = re.sub(r'<use([^>]*?)(?<!/)>', r'<use\1 />', html)
    return html

with open('legacy_site/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

header = re.search(r'<header.*?</header>', html, re.DOTALL).group(0)
footer = re.search(r'<footer.*?</footer>', html, re.DOTALL).group(0)
drawer = re.search(r'<div class="mobile-menu-overlay".*?</nav>', html, re.DOTALL).group(0)

# Replace <header>...</header> with React component structure
with open('src/components/layout/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write('''import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <>
''' + html_to_jsx(header) + '\n' + html_to_jsx(drawer) + '''
    </>
  );
}
''')

with open('src/components/layout/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write('''import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
''' + html_to_jsx(footer) + '''
    </>
  );
}
''')

print("Navbar and Footer ported!")
