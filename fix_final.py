import re

def html_to_jsx(html):
    html = html.replace('class="', 'className="')
    html = html.replace('for="', 'htmlFor="')
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
    
    html = re.sub(r'<path([^>]*?)></path>', r'<path\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<circle([^>]*?)></circle>', r'<circle\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<rect([^>]*?)></rect>', r'<rect\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<use([^>]*?)></use>', r'<use\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<polygon([^>]*?)></polygon>', r'<polygon\1 />', html, flags=re.DOTALL|re.IGNORECASE)
    
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
    
    # Extract between </header> and <footer
    header_end = html.find('</header>')
    footer_start = html.find('<footer')
    
    if header_end != -1 and footer_start != -1:
        main_content = html[header_end + len('</header>'):footer_start]
        print(f"Successfully extracted {html_file}")
    else:
        main_content = "<div>Content not found</div>"
        print(f"Failed extraction on {html_file}")
        
    jsx = html_to_jsx(main_content)
    jsx = jsx.replace('//>', '/>')
    jsx = jsx.replace('/>>', '/>')
    
    # Also remove duplicate imports or unused variables
    
    with open(f'src/pages/{output_file}', 'w', encoding='utf-8') as f:
        f.write(f'''import {{ Link }} from 'react-router-dom';

export default function {component_name}() {{
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

# For index.html, there's a mobile drawer nav between header and hero section!
# Let's extract carefully
with open(f'legacy_site/index.html', 'r', encoding='utf-8') as f:
    html = f.read()
# Extract between <div class="hero-section"> and <footer
hero_start = html.find('<div class="hero-section">')
footer_start = html.find('<footer')
if hero_start != -1 and footer_start != -1:
    main_content = html[hero_start:footer_start]
    print(f"Successfully extracted index.html")
else:
    main_content = "<div>Content not found</div>"
    
jsx = html_to_jsx(main_content)
with open(f'src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(f'''import {{ Link }} from 'react-router-dom';

export default function HomePage() {{
  return (
    <>
''' + jsx + f'''
    </>
  );
}}
''')

print("All pages fixed.")
