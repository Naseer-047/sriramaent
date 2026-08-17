import json
import re

with open('locales/en.json', 'r', encoding='utf-8') as f:
    en = json.load(f)

with open('locales/kn.json', 'r', encoding='utf-8') as f:
    kn = json.load(f)

# Update en.json
en['hero']['title1'] = 'Bring'
en['hero']['title2'] = 'Colour'
en['hero']['title3'] = 'To Life'
en['hero']['subtitle1'] = 'Premium paints, finishes and solutions'
en['hero']['subtitle2'] = 'for beautiful spaces.'
en['hero']['btnShop1'] = 'SHOP'
en['hero']['btnShop2'] = 'PAINTS'
en['hero']['btnExplore1'] = 'EXPLORE'
en['hero']['btnExplore2'] = 'COLOURS'

# Update kn.json
kn['hero']['title1'] = 'ಬಣ್ಣಗಳಿಂದ ನಿಮ್ಮ ಜಗತ್ತಿಗೆ'
kn['hero']['title2'] = 'ಹೊಸ ಜೀವ'
kn['hero']['title3'] = 'ನೀಡಿ'
kn['hero']['subtitle1'] = 'ಸುಂದರವಾದ ಸ್ಥಳಗಳಿಗಾಗಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಪೇಂಟ್ಗಳು'
kn['hero']['subtitle2'] = 'ಮತ್ತು ಪರಿಹಾರಗಳು.'
kn['hero']['btnShop1'] = 'ಪೇಂಟ್ಗಳನ್ನು'
kn['hero']['btnShop2'] = 'ಖರೀದಿಸಿ'
kn['hero']['btnExplore1'] = 'ಬಣ್ಣಗಳನ್ನು'
kn['hero']['btnExplore2'] = 'ಅನ್ವೇಷಿಸಿ'

with open('locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, indent=4, ensure_ascii=False)

with open('locales/kn.json', 'w', encoding='utf-8') as f:
    json.dump(kn, f, indent=4, ensure_ascii=False)

# Now modify index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix title
html = html.replace('Bring<br>', '<span data-i18n="hero.title1">Bring</span><br>')
html = html.replace('<span class="highlight">Colour</span><br>', '<span class="highlight" data-i18n="hero.title2">Colour</span><br>')
html = html.replace('To Life<span class="dot">.</span>', '<span data-i18n="hero.title3">To Life</span><span class="dot">.</span>')

# Fix subtitle
html = html.replace('Premium paints, finishes and solutions<br class="desktop-br">', '<span data-i18n="hero.subtitle1">Premium paints, finishes and solutions</span><br class="desktop-br">')
html = html.replace('for beautiful spaces.', '<span data-i18n="hero.subtitle2">for beautiful spaces.</span>')

# Fix buttons
html = html.replace('<span>SHOP</span>', '<span data-i18n="hero.btnShop1">SHOP</span>')
html = html.replace('<span>PAINTS</span>', '<span data-i18n="hero.btnShop2">PAINTS</span>')
html = html.replace('<span>EXPLORE</span>', '<span data-i18n="hero.btnExplore1">EXPLORE</span>')
html = html.replace('<span>COLOURS</span>', '<span data-i18n="hero.btnExplore2">COLOURS</span>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("index.html fixed for i18n.")
