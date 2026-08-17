import re

files = ['index.html', 'shop-paints.html', 'explore-colours.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Remove PAINT BY SPACE and INSPIRATION from desktop and mobile menus
    content = re.sub(r'<li><a href="[^"]*?"[^>]*?>\s*PAINT BY SPACE\s*</a></li>\s*', '', content)
    content = re.sub(r'<li><a href="[^"]*?">\s*PAINT BY SPACE\s*</a></li>\s*', '', content)
    content = re.sub(r'<li><a href="[^"]*?"[^>]*?>\s*INSPIRATION\s*</a></li>\s*', '', content)
    content = re.sub(r'<li><a href="[^"]*?">\s*INSPIRATION\s*</a></li>\s*', '', content)
    
    # In explore-colours.html, clean up the orphaned drawer HTML
    if file == 'explore-colours.html':
        content = re.sub(r'</header>\s*<button class="close-btn".*?</div>\s*</div>\s*<!-- MAIN CONTENT -->', '</header>\n\n    <!-- MAIN CONTENT -->', content, flags=re.DOTALL)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Links removed and explore-colours.html HTML fixed.")
