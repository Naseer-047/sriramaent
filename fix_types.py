import glob

for file in glob.glob("src/**/*.tsx", recursive=True):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix Link href
    content = content.replace('href=', 'to=')
    # Link uses 'to' instead of 'href' for internal routing, but external links need 'to' as well (or keep <a> for external, but since we replaced <a with <Link, we must use to=)
    
    # Fix i18n changeLanguage in Navbar
    if 'Navbar.tsx' in file:
        content = content.replace('changeLanguage', 'i18n.changeLanguage')
        content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport i18n from '../../i18n';")
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed Type errors")
