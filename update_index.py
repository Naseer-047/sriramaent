with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# --- FEATURES ---
html = html.replace('AUTHENTIC<br>SRIRAMAENT', '<span data-i18n="features.authTitle">AUTHENTIC<br>SRIRAMAENT</span>')
html = html.replace('100% Genuine<br>Products', '<span data-i18n="features.authSub">100% Genuine<br>Products</span>')
html = html.replace('TRUSTED<br>EXPERTS', '<span data-i18n="features.trustTitle">TRUSTED<br>EXPERTS</span>')
html = html.replace('Colour<br>Guidance', '<span data-i18n="features.trustSub">Colour<br>Guidance</span>')
html = html.replace('FAST & SAFE<br>DELIVERY', '<span data-i18n="features.fastTitle">FAST & SAFE<br>DELIVERY</span>')
html = html.replace('On Time,<br>Every Time', '<span data-i18n="features.fastSub">On Time,<br>Every Time</span>')
html = html.replace('QUALITY<br>ASSURED', '<span data-i18n="features.qualTitle">QUALITY<br>ASSURED</span>')
html = html.replace('Beautiful<br>Spaces', '<span data-i18n="features.qualSub">Beautiful<br>Spaces</span>')

# --- SECTION 2 (SHOP CATEGORIES) ---
html = html.replace('SHOP WHAT YOU NEED', '<span data-i18n="shopCategories.eyebrow">SHOP WHAT YOU NEED</span>')
html = html.replace('Choose the right product for <span style="color: #E2B659;">your home.</span>', '<span data-i18n="shopCategories.title1">Choose the right product for</span> <span style="color: #E2B659;" data-i18n="shopCategories.title2">your home.</span>')
html = html.replace('Quality paints and solutions for every surface and every need.', '<span data-i18n="shopCategories.sub">Quality paints and solutions for every surface and every need.</span>')
html = html.replace('<h3>INTERIOR<br>PAINTS</h3>', '<h3 data-i18n="shopCategories.interior">INTERIOR<br>PAINTS</h3>')
html = html.replace('<p>Smooth finishes for<br>walls that feel like home.</p>', '<p data-i18n="shopCategories.interiorSub">Smooth finishes for<br>walls that feel like home.</p>')
html = html.replace('<h3>EXTERIOR<br>PAINTS</h3>', '<h3 data-i18n="shopCategories.exterior">EXTERIOR<br>PAINTS</h3>')
html = html.replace('<p>Long-lasting colour<br>made for the outside world.</p>', '<p data-i18n="shopCategories.exteriorSub">Long-lasting colour<br>made for the outside world.</p>')
html = html.replace('<h3>WATER-<br>PROOFING</h3>', '<h3 data-i18n="shopCategories.water">WATER-<br>PROOFING</h3>')
html = html.replace('<p>Protection where<br>your walls need it most.</p>', '<p data-i18n="shopCategories.waterSub">Protection where<br>your walls need it most.</p>')
html = html.replace('<h3>TOOLS &<br>ACCESSORIES</h3>', '<h3 data-i18n="shopCategories.tools">TOOLS &<br>ACCESSORIES</h3>')
html = html.replace('<p>Everything you need<br>to complete the job.</p>', '<p data-i18n="shopCategories.toolsSub">Everything you need<br>to complete the job.</p>')
html = html.replace('Explore Collection <svg', '<span data-i18n="shopCategories.explore">Explore Collection</span> <svg')
# Desktop equivalents
html = html.replace('<h3>INTERIOR PAINTS</h3>', '<h3 data-i18n="shopCategories.interior">INTERIOR PAINTS</h3>')
html = html.replace('<p>Ghar ke andar ke liye</p>', '<p data-i18n="shopCategories.interiorDesc">Ghar ke andar ke liye</p>')
html = html.replace('<h3>EXTERIOR PAINTS</h3>', '<h3 data-i18n="shopCategories.exterior">EXTERIOR PAINTS</h3>')
html = html.replace('<p>Ghar ke bahar ke liye</p>', '<p data-i18n="shopCategories.exteriorDesc">Ghar ke bahar ke liye</p>')
html = html.replace('<h3>WATERPROOFING</h3>', '<h3 data-i18n="shopCategories.waterDesk">WATERPROOFING</h3>')
html = html.replace('<p>Seelan aur paani se protection</p>', '<p data-i18n="shopCategories.waterDesc">Seelan aur paani se protection</p>')
html = html.replace('<h3>PAINTING ESSENTIALS</h3>', '<h3 data-i18n="shopCategories.toolsDesk">PAINTING ESSENTIALS</h3>')
html = html.replace('<p>Brush, roller, primer aur tools</p>', '<p data-i18n="shopCategories.toolsDesc">Brush, roller, primer aur tools</p>')
html = html.replace('View Products <svg', '<span data-i18n="shopCategories.viewProd">View Products</span> <svg')
html = html.replace('View All Categories', '<span data-i18n="shopCategories.viewAll">View All Categories</span>')

# --- SECTION 3 (POPULAR PRODUCTS) ---
html = html.replace('POPULAR PRODUCTS', '<span data-i18n="popular.eyebrow">POPULAR PRODUCTS</span>')
html = html.replace('<h2>Find Your Perfect Paint</h2>', '<h2 data-i18n="popular.title">Find Your Perfect Paint</h2>')
html = html.replace('<p>Popular Asian Paints products, selected for every kind of home.</p>', '<p data-i18n="popular.sub">Popular Asian Paints products, selected for every kind of home.</p>')
html = html.replace('<span class="pop-tag">INTERIOR PAINT</span>', '<span class="pop-tag" data-i18n="popular.tagInt">INTERIOR PAINT</span>')
html = html.replace('<span class="pop-tag">EXTERIOR PAINT</span>', '<span class="pop-tag" data-i18n="popular.tagExt">EXTERIOR PAINT</span>')
html = html.replace('<span class="pop-tag">WATERPROOFING</span>', '<span class="pop-tag" data-i18n="popular.tagWater">WATERPROOFING</span>')
html = html.replace('<p class="pop-desc">Rich finish for beautiful interiors.</p>', '<p class="pop-desc" data-i18n="popular.desc1">Rich finish for beautiful interiors.</p>')
html = html.replace('<p class="pop-desc">Weather protection with long lasting beauty.</p>', '<p class="pop-desc" data-i18n="popular.desc2">Weather protection with long lasting beauty.</p>')
html = html.replace('<p class="pop-desc">Protects walls from dampness and leakage.</p>', '<p class="pop-desc" data-i18n="popular.desc3">Protects walls from dampness and leakage.</p>')
html = html.replace('<p class="pop-desc">Smooth finish for everyday interior walls.</p>', '<p class="pop-desc" data-i18n="popular.desc4">Smooth finish for everyday interior walls.</p>')
html = html.replace('<span class="pop-discount">30% OFF</span>', '<span class="pop-discount" data-i18n="popular.off30">30% OFF</span>')
html = html.replace('<span class="pop-discount">20% OFF</span>', '<span class="pop-discount" data-i18n="popular.off20">20% OFF</span>')
html = html.replace('View Product\n                            <svg', '<span data-i18n="popular.view">View Product</span>\n                            <svg')
html = html.replace('Explore All Products\n                    <svg', '<span data-i18n="popular.exploreAll">Explore All Products</span>\n                    <svg')

# --- SECTION 4 (VISUALIZER) ---
html = html.replace('VISUALIZE. CHOOSE. PAINT.', '<span data-i18n="vis.eyebrow">VISUALIZE. CHOOSE. PAINT.</span>')
html = html.replace('See it.<br>', '<span data-i18n="vis.title1">See it.</span><br>')
html = html.replace('Love it.<br>', '<span data-i18n="vis.title2">Love it.</span><br>')
html = html.replace('<span class="vis-paint-it">Paint it.</span>', '<span class="vis-paint-it" data-i18n="vis.title3">Paint it.</span>')
html = html.replace('<p class="vis-subtitle">Visualize colours in your space and find your perfect shade.</p>', '<p class="vis-subtitle" data-i18n="vis.sub">Visualize colours in your space and find your perfect shade.</p>')
html = html.replace('Living Room\n                        </div>', '<span data-i18n="vis.tabLiving">Living Room</span>\n                        </div>')
html = html.replace('Bedroom\n                        </div>', '<span data-i18n="vis.tabBed">Bedroom</span>\n                        </div>')
html = html.replace('Exterior\n                        </div>', '<span data-i18n="vis.tabExt">Exterior</span>\n                        </div>')
html = html.replace('<div class="vis-choose-title">Choose a colour</div>', '<div class="vis-choose-title" data-i18n="vis.choose">Choose a colour</div>')

for i, (name, desc) in enumerate([("Warm Sand", "Warm, inviting and earthy."), ("Olive Mist", "Soft, natural and calming."), ("Soft Peach", "Gentle, soothing and cheerful."), ("Sky Blue", "Airy, fresh and expansive."), ("Stone Grey", "Modern, neutral and elegant."), ("Pure White", "Crisp, clean and timeless.")], 1):
    html = html.replace(f'<span class="vis-swatch-label">{name}</span>', f'<span class="vis-swatch-label" data-i18n="vis.colors.c{i}">{name}</span>')
    html = html.replace(f'<div class="vis-color-name">{name}</div>', f'<div class="vis-color-name" data-i18n="vis.colors.c{i}">{name}</div>')
    html = html.replace(f'<div class="vis-color-desc">{desc}</div>', f'<div class="vis-color-desc" data-i18n="vis.colors.d{i}">{desc}</div>')

html = html.replace('Explore This Colour\n                        </button>', '<span data-i18n="vis.explore">Explore This Colour</span>\n                        </button>')
html = html.replace('<div class="vis-cta-footer">See matching paints & products</div>', '<div class="vis-cta-footer" data-i18n="vis.seeMatching">See matching paints & products</div>')
html = html.replace('<span class="vis-compare-text">Compare</span>', '<span class="vis-compare-text" data-i18n="vis.compare">Compare</span>')

html = html.replace('<h5>Curated Colour Palettes</h5>', '<h5 data-i18n="vis.f1Title">Curated Colour Palettes</h5>')
html = html.replace('<p>Expert combinations for every space.</p>', '<p data-i18n="vis.f1Sub">Expert combinations for every space.</p>')
html = html.replace('<h5>Trusted Quality</h5>', '<h5 data-i18n="vis.f2Title">Trusted Quality</h5>')
html = html.replace('<p>Asian Paints quality you can rely on.</p>', '<p data-i18n="vis.f2Sub">Asian Paints quality you can rely on.</p>')
html = html.replace('<h5>Long Lasting Beauty</h5>', '<h5 data-i18n="vis.f3Title">Long Lasting Beauty</h5>')
html = html.replace('<p>Colours that stay fresh for years.</p>', '<p data-i18n="vis.f3Sub">Colours that stay fresh for years.</p>')
html = html.replace('<h5>Beautiful Finishes</h5>', '<h5 data-i18n="vis.f4Title">Beautiful Finishes</h5>')
html = html.replace('<p>Matte, rich, smooth & elegant.</p>', '<p data-i18n="vis.f4Sub">Matte, rich, smooth & elegant.</p>')

# --- SECTION 5 (PARTNER) ---
html = html.replace('YOUR LOCAL PAINT PARTNER\n                </div>', '<span data-i18n="partner.eyebrow">YOUR LOCAL PAINT PARTNER</span>\n                </div>')
html = html.replace('<h2>Your Local <span class="partner-green">Paint Partner.</span></h2>', '<h2><span data-i18n="partner.title1">Your Local</span> <span class="partner-green" data-i18n="partner.title2">Paint Partner.</span></h2>')
html = html.replace('Your Local <span class="partner-green">Paint Partner.</span>', '<span data-i18n="partner.title1">Your Local</span> <span class="partner-green" data-i18n="partner.title2">Paint Partner.</span>') # for H2
html = html.replace('<p class="partner-sub">Quality paints, helpful guidance and easy ordering, right from your local Asian Paints store.</p>', '<p class="partner-sub" data-i18n="partner.sub">Quality paints, helpful guidance and easy ordering, right from your local Asian Paints store.</p>')
html = html.replace('<h4>Visit Our Store</h4>', '<h4 data-i18n="partner.visit">Visit Our Store</h4>')
html = html.replace('<p style="color: #938c35; font-weight: 700;">Asian Paints Colourworld</p>', '<p style="color: #938c35; font-weight: 700;" data-i18n="partner.visit1">Asian Paints Colourworld</p>')
html = html.replace('<p>your trusted neighbourhood store</p>', '<p data-i18n="partner.visit2">your trusted neighbourhood store</p>')
html = html.replace('<h4>Store Address</h4>', '<h4 data-i18n="partner.address">Store Address</h4>')
html = html.replace('<p>[Your Shop Address Here]<br>[City, State, Pincode]</p>', '<p data-i18n="partner.address1">[Your Shop Address Here]<br>[City, State, Pincode]</p>')
html = html.replace('<h4>Opening Hours</h4>', '<h4 data-i18n="partner.hours">Opening Hours</h4>')
html = html.replace('<p>Mon - Sun &bull; 9:30 AM - 8:30 PM</p>', '<p data-i18n="partner.hours1">Mon - Sun &bull; 9:30 AM - 8:30 PM</p>')
html = html.replace('<p>Call us for enquiries & orders</p>', '<p data-i18n="partner.callInfo">Call us for enquiries & orders</p>')

html = html.replace('Get Directions\n                        </a>', '<span data-i18n="partner.directions">Get Directions</span>\n                        </a>')
html = html.replace('Call Store\n                        </a>', '<span data-i18n="partner.call">Call Store</span>\n                        </a>')
html = html.replace('WhatsApp Us\n                    </a>', '<span data-i18n="partner.whatsapp">WhatsApp Us</span>\n                    </a>')

# --- FOOTER ---
html = html.replace('<h3>Need Help?</h3>', '<h3 data-i18n="footer.needHelp">Need Help?</h3>')
html = html.replace('Support:', '<span data-i18n="footer.support">Support:</span>')
html = html.replace('Email:', '<span data-i18n="footer.email">Email:</span>')
html = html.replace('<h3>Explore</h3>', '<h3 data-i18n="footer.explore">Explore</h3>')
html = html.replace('<li><a href="index.html">Home</a></li>', '<li><a href="index.html" data-i18n="footer.home">Home</a></li>')
html = html.replace('<li><a href="shop-paints.html">Shop Paints</a></li>', '<li><a href="shop-paints.html" data-i18n="footer.shop">Shop Paints</a></li>')
html = html.replace('<li><a href="#">Offers</a></li>', '<li><a href="#" data-i18n="footer.offers">Offers</a></li>')
html = html.replace('<li><a href="#">Privacy Policy</a></li>', '<li><a href="#" data-i18n="footer.privacy">Privacy Policy</a></li>')
html = html.replace('<li><a href="#">Terms & Conditions</a></li>', '<li><a href="#" data-i18n="footer.terms">Terms & Conditions</a></li>')
html = html.replace('<h3>Visit Us</h3>', '<h3 data-i18n="footer.visit">Visit Us</h3>')
html = html.replace('<p>&copy; 2026 Sri Ram Enterprises. All rights reserved.</p>', '<p data-i18n="footer.rights">&copy; 2026 Sri Ram Enterprises. All rights reserved.</p>')

# MOBILE DRAWER MENU - Also need to add Language Switcher option here
if 'language-toggle-mobile' not in html:
    # Add after Offers in the drawer menu (there are two OFFERS links, one in desktop, one in mobile)
    menu_item = '''<li><a href="#"><span data-i18n="nav.offers">OFFERS</span></a></li>
                <li class="language-toggle-mobile" style="margin-top:20px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 20px;">
                    <div style="font-size: 14px; color: #555; margin-bottom: 12px;" data-i18n="prompt.title">Select Language</div>
                    <div style="display: flex; gap: 12px;">
                        <button onclick="changeLanguage('en')" style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #ddd; background: #fff; font-family: var(--font-body); font-weight: 500; cursor: pointer;">English</button>
                        <button onclick="changeLanguage('kn')" style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #ddd; background: #fff; font-family: var(--font-body); font-weight: 500; cursor: pointer;">ಕನ್ನಡ</button>
                    </div>
                </li>'''
    # We only want to replace the second instance (which is in the drawer menu) or just replace both if it doesn't matter (Wait, desktop menu has display:flex, adding an li with display:block will break it. We MUST only add it to the drawer menu)
    
    # Let's find the drawer menu part explicitly
    drawer_start = html.find('<div class="drawer-menu">')
    if drawer_start != -1:
        offers_pos = html.find('<li><a href="#"><span data-i18n="nav.offers">OFFERS</span></a></li>', drawer_start)
        if offers_pos != -1:
            html = html[:offers_pos] + menu_item + html[offers_pos + len('<li><a href="#"><span data-i18n="nav.offers">OFFERS</span></a></li>'):]


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html sections.")
