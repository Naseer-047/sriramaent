import json
import os

address_en = "Kodambahalli, Channapatna Taluk<br>Ramanagara - 562138"
address_kn = "ಕೋಡಂಬಳ್ಳಿ, ಚನ್ನಪಟ್ಟಣ ತಾಲೂಕು<br>ರಾಮನಗರ - 562138"

# Update JSON
with open('locales/en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)
en['partner']['address1'] = address_en
en['footer']['address'] = address_en
with open('locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, indent=4, ensure_ascii=False)

with open('locales/kn.json', 'r', encoding='utf-8') as f:
    kn = json.load(f)
kn['partner']['address1'] = address_kn
kn['footer']['address'] = address_kn
with open('locales/kn.json', 'w', encoding='utf-8') as f:
    json.dump(kn, f, indent=4, ensure_ascii=False)

# Update HTML files
html_files = ['index.html', 'shop-paints.html', 'explore-colours.html', 'product-details.html']
for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the dummy address in HTML
        content = content.replace('[Your Shop Address Here]<br>[City, State, Pincode]', address_en)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated address in locales and HTML files.")
