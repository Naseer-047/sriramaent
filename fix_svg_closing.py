import glob
import re

for file in glob.glob("src/pages/*.tsx"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove closing tags for the ones we made self-closing
    for tag in ['path', 'circle', 'rect', 'use', 'polygon']:
        content = re.sub(f'</{tag}>', '', content, flags=re.IGNORECASE)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
