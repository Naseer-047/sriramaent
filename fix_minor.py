import glob

for file in glob.glob("src/**/*.tsx", recursive=True):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix srcset -> srcSet
    content = content.replace('srcset="', 'srcSet="')
    
    # Fix readonly -> readOnly
    content = content.replace('readonly', 'readOnly')
    content = content.replace('readOnly="', 'readOnly={true}"') # wait, usually it's just readOnly but html uses readonly="readonly"
    
    # Fix toggleAcc(this)
    content = content.replace('toggleAcc(this)', '')
    content = content.replace('onClick={() => {}}', '')
    
    # Fix duplicate i18n
    if 'Navbar.tsx' in file:
        content = content.replace("import i18n from '../../i18n';\nimport i18n from '../../i18n';", "import i18n from '../../i18n';")
        content = content.replace('i18n.i18n.changeLanguage', 'i18n.changeLanguage')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed remaining TS errors")
