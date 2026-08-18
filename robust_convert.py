import re
from html.parser import HTMLParser

class JSXParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.jsx = ""
        
    def handle_starttag(self, tag, attrs):
        self.jsx += f"<{tag}"
        for attr in attrs:
            k, v = attr
            if k == 'class':
                k = 'className'
            elif k == 'for':
                k = 'htmlFor'
            elif k == 'stroke-width':
                k = 'strokeWidth'
            elif k == 'stroke-linecap':
                k = 'strokeLinecap'
            elif k == 'stroke-linejoin':
                k = 'strokeLinejoin'
            elif k == 'clip-rule':
                k = 'clipRule'
            elif k == 'fill-rule':
                k = 'fillRule'
            elif k == 'viewbox':
                k = 'viewBox'
                
            if k == 'style' and v:
                # Basic style parser
                rules = [r.strip() for r in v.split(';') if r.strip()]
                react_rules = []
                for r in rules:
                    if ':' in r:
                        k_style, v_style = r.split(':', 1)
                        k_style = k_style.strip()
                        v_style = v_style.strip().replace("'", '"')
                        k_parts = k_style.split('-')
                        k_camel = k_parts[0] + ''.join(x.title() for x in k_parts[1:])
                        react_rules.append(f"{k_camel}: '{v_style}'")
                self.jsx += f" style={{{{ {', '.join(react_rules)} }}}}"
            elif k in ['onclick', 'onchange']:
                k = 'onClick' if k == 'onclick' else 'onChange'
                self.jsx += f" {k}={{() => {{{v}}}}}"
            elif v is None:
                self.jsx += f" {k}"
            else:
                v = v.replace('"', '&quot;')
                self.jsx += f' {k}="{v}"'
        
        if tag in ['br', 'hr', 'img', 'input', 'source', 'path', 'circle', 'rect', 'use', 'polygon']:
            self.jsx += " />"
        else:
            self.jsx += ">"

    def handle_endtag(self, tag):
        if tag not in ['br', 'hr', 'img', 'input', 'source', 'path', 'circle', 'rect', 'use', 'polygon']:
            self.jsx += f"</{tag}>"

    def handle_data(self, data):
        # Escape curly braces for JSX
        data = data.replace('{', '&#123;').replace('}', '&#125;')
        self.jsx += data

    def handle_entityref(self, name):
        self.jsx += f"&{name};"

    def handle_charref(self, name):
        self.jsx += f"&#{name};"
        
    def handle_comment(self, data):
        self.jsx += f"{{/* {data} */}}"

def convert_html_to_jsx(html_str):
    parser = JSXParser()
    parser.feed(html_str)
    
    # post processing for Link replacement
    jsx = parser.jsx
    jsx = jsx.replace('href="index.html"', 'to="/"')
    jsx = jsx.replace('href="shop-paints.html"', 'to="/shop-paints.html"')
    jsx = jsx.replace('href="explore-colours.html"', 'to="/explore-colours.html"')
    jsx = jsx.replace('href="product-details.html"', 'to="/product-details.html"')
    jsx = jsx.replace('<a ', '<Link ')
    jsx = jsx.replace('</a>', '</Link>')
    return jsx

# Now port pages
def port_page(html_file, component_name, output_file, is_layout=False):
    with open(f'legacy_site/{html_file}', 'r', encoding='utf-8') as f:
        html = f.read()
    
    if not is_layout:
        start_idx = html.find('<main')
        if start_idx == -1:
            start_idx = html.find('<div class="page-container"')
        if start_idx == -1:
            start_idx = html.find('<div class="container"')
        end_idx = html.find('<footer')
        if start_idx != -1 and end_idx != -1:
            html = html[start_idx:end_idx]
        else:
            html = "<div>Content not found</div>"
            
    jsx = convert_html_to_jsx(html)
    
    with open(f'src/{"pages" if not is_layout else "components/layout"}/{output_file}', 'w', encoding='utf-8') as f:
        f.write(f'''import {{ useTranslation }} from 'react-i18next';
import {{ Link }} from 'react-router-dom';

export default function {component_name}() {{
  const {{ t }} = useTranslation();
  return (
    <>
''' + jsx + f'''
    </>
  );
}}
''')

port_page('shop-paints.html', 'ShopPage', 'ShopPage.tsx')
port_page('explore-colours.html', 'ColoursPage', 'ColoursPage.tsx')
port_page('product-details.html', 'ProductPage', 'ProductPage.tsx')
port_page('index.html', 'HomePage', 'HomePage.tsx')

# Navbar and footer
with open(f'legacy_site/index.html', 'r', encoding='utf-8') as f:
    html = f.read()
header = re.search(r'<header.*?</header>', html, re.DOTALL).group(0)
footer = re.search(r'<footer.*?</footer>', html, re.DOTALL).group(0)
drawer = re.search(r'<div class="mobile-menu-overlay".*?</nav>', html, re.DOTALL).group(0)

with open('src/components/layout/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(f'''import {{ useTranslation }} from 'react-i18next';
import {{ Link }} from 'react-router-dom';

export default function Navbar() {{
  const {{ t }} = useTranslation();
  return (
    <>
''' + convert_html_to_jsx(header) + '\n' + convert_html_to_jsx(drawer) + f'''
    </>
  );
}}
''')

with open('src/components/layout/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(f'''import {{ useTranslation }} from 'react-i18next';
import {{ Link }} from 'react-router-dom';

export default function Footer() {{
  const {{ t }} = useTranslation();
  return (
    <>
''' + convert_html_to_jsx(footer) + f'''
    </>
  );
}}
''')

print("All components re-ported with robust HTML parser!")
