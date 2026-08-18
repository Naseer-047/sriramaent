import re

def add_body_class(file_path, class_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'useEffect' not in content:
        content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useEffect } from 'react';")
    
    # Check if useEffect is already there for body class
    if 'document.body.classList.add' not in content:
        hook_code = f"""  useEffect(() => {{
    document.body.classList.add('{class_name}');
    return () => {{
      document.body.classList.remove('{class_name}');
    }};
  }}, []);
"""
        content = re.sub(r'(export default function [a-zA-Z0-9_]+\(\) \{\n)', r'\1' + hook_code, content)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

add_body_class('src/pages/ShopPage.tsx', 'shop-page')
add_body_class('src/pages/ProductPage.tsx', 'details-page')
add_body_class('src/pages/ColoursPage.tsx', 'explore-page')

print("Added body classes")
