import re

def html_to_jsx(html):
    html = html.replace('class="', 'className="')
    html = html.replace('for="', 'htmlFor="')
    # Use re.DOTALL and re.IGNORECASE
    html = re.sub(r'<(br|hr|img|input|source)([^>]*?)(?<!/)>', r'<\1\2 />', html, flags=re.DOTALL|re.IGNORECASE)
    
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
    html = re.sub(r'onclick="([^"]*)"', r'onClick={() => {\1}}', html, flags=re.IGNORECASE)
    html = re.sub(r'onchange="([^"]*)"', r'onChange={() => {\1}}', html, flags=re.IGNORECASE)
    
    html = html.replace('href="index.html"', 'to="/"')
    html = html.replace('href="shop-paints.html"', 'to="/shop-paints.html"')
    html = html.replace('href="explore-colours.html"', 'to="/explore-colours.html"')
    html = html.replace('href="product-details.html"', 'to="/product-details.html"')
    html = html.replace('<a ', '<Link ')
    html = html.replace('</a>', '</Link>')
    
    html = html.replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '')
    html = html.replace('clip-rule', 'clipRule')
    html = html.replace('fill-rule', 'fillRule')
    
    # SVG tags: first ensure we don't blindly add /> if there is already a closing tag
    # Actually, we can just replace <path ...></path> with <path ... />
    html = re.sub(r'<path([^>]*?)></path>', r'<path\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<circle([^>]*?)></circle>', r'<circle\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<rect([^>]*?)></rect>', r'<rect\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<use([^>]*?)></use>', r'<use\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<polygon([^>]*?)></polygon>', r'<polygon\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    
    # Now for self closing ones that didn't have </path>
    html = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<circle([^>]*?)(?<!/)>', r'<circle\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<rect([^>]*?)(?<!/)>', r'<rect\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<use([^>]*?)(?<!/)>', r'<use\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<polygon([^>]*?)(?<!/)>', r'<polygon\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    
    html = html.replace('<!--', '{/*')
    html = html.replace('-->', '*/}')
    return html

def port_page(html_file, component_name, output_file):
    with open(f'legacy_site/{html_file}', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # EXACT replacement logic
    if html_file == 'index.html':
        start_idx = html.find('<section class="hero-section"')
    else:
        start_idx = html.find('<main')
        if start_idx == -1:
            start_idx = html.find('<div class="page-container"')
        if start_idx == -1:
            start_idx = html.find('<div class="container"')
            
    end_idx = html.find('<footer')
    
    if start_idx != -1 and end_idx != -1:
        main_content = html[start_idx:end_idx]
    else:
        main_content = "<div>Content not found</div>"
        
    jsx = html_to_jsx(main_content)
    
    # fix any double slashes we created
    jsx = jsx.replace('//>', '/>')
    jsx = jsx.replace('/>>', '/>')
    
    with open(f'src/pages/{output_file}', 'w', encoding='utf-8') as f:
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

print("Pages ported using Regex V3!")
