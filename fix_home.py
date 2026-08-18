import re

with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix unclosed <source> tags
content = re.sub(r'(<source[^>]*?)(?<!/)>', r'\1 />', content, flags=re.IGNORECASE)

# In HomePage, the extraction missed <section class="hero-section">
# Let's see what it starts with.
if "className=\"hero-content\"" in content and "<section" not in content[:content.find("className=\"hero-content\"")]:
    # Add it
    content = content.replace('<main className="hero-content">', '<section className="hero-section" id="home">\n<main className="hero-content">')
    # The end of it is probably </div>\n</section> which was extracted as </div>\n</section> so now they match!

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("HomePage fixes applied")
