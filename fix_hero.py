import re

with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add padding to hero-content
content = content.replace('<main className="hero-content">', '<main className="hero-content" style={{ paddingTop: "100px" }}>')

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed hero-content padding")
