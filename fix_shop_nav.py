import re

with open('src/pages/ShopPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Import useNavigate
if 'useNavigate' not in content:
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useNavigate } from 'react-router-dom';")

# Add navigate hook inside ShopPage
if 'const navigate = useNavigate();' not in content:
    content = content.replace('export default function ShopPage() {', 'export default function ShopPage() {\n  const navigate = useNavigate();\n\n  const handleProductClick = (id) => {\n    navigate(`/product-details.html?id=${id}`);\n  };\n')

# Add onClick to disc-card
content = re.sub(
    r'<div className="disc-card">', 
    r'<div className="disc-card" onClick={() => handleProductClick("interior-walls-royale-luxury-emulsion-asian-paints")} style={{ cursor: "pointer" }}>', 
    content
)

# Add onClick to product-card
content = re.sub(
    r'<div className="product-card">', 
    r'<div className="product-card" onClick={() => handleProductClick("interior-walls-royale-luxury-emulsion-asian-paints")} style={{ cursor: "pointer" }}>', 
    content
)

with open('src/pages/ShopPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated ShopPage navigation")
