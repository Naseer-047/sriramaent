import re

with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove header block
content = re.sub(r'<header.*?</header>', '', content, flags=re.DOTALL)
# Remove mobile menu overlay
content = re.sub(r'<div className="mobile-menu-overlay".*?</nav>\s*</div>', '', content, flags=re.DOTALL)

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned duplicate headers")
