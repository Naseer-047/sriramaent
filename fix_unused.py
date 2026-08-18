import glob

for file in glob.glob("src/**/*.tsx", recursive=True):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove unused Link
    if "import { Link } from 'react-router-dom';" in content and '<Link' not in content:
        content = content.replace("import { Link } from 'react-router-dom';", "")
        
    # We will just comment out the t = useTranslation() if t is not used
    # Wait, we can just replace 'const { t } = useTranslation();' with ''
    # if '{t(' not in content and 't(' not in content
    
    if 'const { t } = useTranslation();' in content and 't(' not in content:
        content = content.replace("const { t } = useTranslation();", "")
        content = content.replace("import { useTranslation } from 'react-i18next';", "")
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed unused variables")
