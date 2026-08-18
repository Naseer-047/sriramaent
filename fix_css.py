import glob
import re

for file in glob.glob("src/styles/legacy/*.css"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace url('assets/...') with url('/assets/...')
    content = re.sub(r"url\(['\"]?assets/", "url('/assets/", content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed CSS assets")
