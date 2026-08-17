files = ['shop-paints.html', 'explore-colours.html', 'product-details.html']
menu_item = '''<li><a href="#"><span data-i18n="nav.offers">OFFERS</span></a></li>
                <li class="language-toggle-mobile" style="margin-top:20px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 20px;">
                    <div style="font-size: 14px; color: #555; margin-bottom: 12px;" data-i18n="prompt.title">Select Language</div>
                    <div style="display: flex; gap: 12px;">
                        <button onclick="changeLanguage('en')" style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #ddd; background: #fff; font-family: var(--font-body); font-weight: 500; cursor: pointer;">English</button>
                        <button onclick="changeLanguage('kn')" style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #ddd; background: #fff; font-family: var(--font-body); font-weight: 500; cursor: pointer;">ಕನ್ನಡ</button>
                    </div>
                </li>'''

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    if 'language-toggle-mobile' not in html:
        drawer_start = html.find('<div class="drawer-menu">')
        if drawer_start != -1:
            offers_pos = html.find('<li><a href="#"><span data-i18n="nav.offers">OFFERS</span></a></li>', drawer_start)
            if offers_pos != -1:
                html = html[:offers_pos] + menu_item + html[offers_pos + len('<li><a href="#"><span data-i18n="nav.offers">OFFERS</span></a></li>'):]
            else:
                offers_pos2 = html.find('<li><a href="#">OFFERS</a></li>', drawer_start)
                if offers_pos2 != -1:
                    html = html[:offers_pos2] + menu_item + html[offers_pos2 + len('<li><a href="#">OFFERS</a></li>'):]

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)
print("Updated other files.")
