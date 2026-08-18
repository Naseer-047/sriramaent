import re

with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the dot span completely
content = content.replace('<span className="dot">.</span>', '')

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed ellipse")
