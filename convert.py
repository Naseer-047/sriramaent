import re

def html_to_jsx(html):
    # class to className
    html = html.replace('class="', 'className="')
    # for to htmlFor
    html = html.replace('for="', 'htmlFor="')
    # self closing tags
    html = re.sub(r'<(br|hr|img)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    # stroke-width to strokeWidth
    html = html.replace('stroke-width', 'strokeWidth')
    html = html.replace('stroke-linecap', 'strokeLinecap')
    html = html.replace('stroke-linejoin', 'strokeLinejoin')
    
    # style="key: value; key: value" -> style={{ key: 'value', key: 'value' }}
    def style_replacer(match):
        style_str = match.group(1)
        rules = [r.strip() for r in style_str.split(';') if r.strip()]
        react_rules = []
        for r in rules:
            if ':' in r:
                k, v = r.split(':', 1)
                k = k.strip()
                v = v.strip().replace("'", '"')
                # camelCase key
                k_parts = k.split('-')
                k_camel = k_parts[0] + ''.join(x.title() for x in k_parts[1:])
                react_rules.append(f"{k_camel}: '{v}'")
        return 'style={{ ' + ', '.join(react_rules) + ' }}'
    
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    
    # onclick to onClick
    html = re.sub(r'onclick="([^"]*)"', r'onClick={() => {\1}}', html)
    
    return html

with open('legacy_site/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract parts
# Header (from <header to </header>)
header = re.search(r'<header.*?</header>', html, re.DOTALL).group(0)
# Footer
footer = re.search(r'<footer.*?</footer>', html, re.DOTALL).group(0)

# Main (the rest)
main_content = html[html.find('<section class="hero-section">') : html.find('<footer')]

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write('''import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
''' + html_to_jsx(main_content) + '''
    </>
  );
}
''')

print("HomePage ported!")
