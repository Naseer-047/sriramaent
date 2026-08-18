import re

with open('src/components/layout/Navbar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add useLocation import
if 'useLocation' not in content:
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useLocation } from 'react-router-dom';")

# Modify Navbar function
if 'const location = useLocation();' not in content:
    content = content.replace('export default function Navbar() {', '''export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const headerClass = isHome ? "header" : "header shop-header-white";
  const headerStyle = isHome ? { position: 'absolute' as const, top: 0, left: 0, right: 0, zIndex: 100 } : {};''')
    
    content = content.replace('<header className="header">', '<header className={headerClass} style={headerStyle}>')

with open('src/components/layout/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Navbar")
