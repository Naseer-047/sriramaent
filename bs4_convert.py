from bs4 import BeautifulSoup
import re

def html_to_jsx(html):
    # Parse with html.parser to fix unclosed tags
    soup = BeautifulSoup(html, 'html.parser')
    
    # Pre-process attributes
    for tag in soup.find_all(True):
        # class -> className
        if tag.has_attr('class'):
            tag['className'] = " ".join(tag['class'])
            del tag['class']
        # for -> htmlFor
        if tag.has_attr('for'):
            tag['htmlFor'] = tag['for']
            del tag['for']
        
        # camelCase SVG attributes
        for attr in list(tag.attrs.keys()):
            if '-' in attr and not attr.startswith('data-') and not attr.startswith('aria-'):
                parts = attr.split('-')
                camel = parts[0] + ''.join(x.title() for x in parts[1:])
                tag[camel] = tag[attr]
                del tag[attr]
            
            # handle inline styles
            if attr == 'style':
                style_str = tag[attr]
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
                
                # We inject a placeholder and replace it later because BS4 escapes curly braces
                tag['style'] = "STYLE_PLACEHOLDER_" + "_".join(react_rules).replace(' ', '')
                # Wait, this is getting complicated. Let's just output as string and replace later
    
    # Render to string
    out = soup.decode()
    
    # Fix empty elements to be self-closing (BS4 might do this but let's be sure for JSX)
    out = re.sub(r'<(br|hr|img|input|path|circle|rect|use|polygon)([^>]*)></\1>', r'<\1\2 />', out)
    out = re.sub(r'<(br|hr|img|input|path|circle|rect|use|polygon)([^>]*?)(?<!/)>', r'<\1\2 />', out)
    
    # We still have issues with SVG attributes like clip-rule, fill-rule if they were handled by the camelCaser
    
    # Let's fallback to the basic regex but we just need to fix unclosed tags.
    pass

