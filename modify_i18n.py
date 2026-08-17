import re
import os

files = ['index.html', 'shop-paints.html', 'explore-colours.html', 'product-details.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Add CSS and JS links if not already present
    if 'i18n.css' not in html:
        html = html.replace('</head>', '    <link rel="stylesheet" href="i18n.css">\n</head>')
    if 'i18n.js' not in html:
        html = html.replace('</body>', '    <script src="i18n.js"></script>\n</body>')

    # Common Navbar tags (ignoring icons, just text)
    html = re.sub(r'(<a href="index.html"[^>]*?>)HOME(</a>)', r'\1<span data-i18n="nav.home">HOME</span>\2', html)
    html = re.sub(r'(<a href="shop-paints.html"[^>]*?>)SHOP PAINTS', r'\1<span data-i18n="nav.shop">SHOP PAINTS</span>', html)
    html = re.sub(r'(<a href="explore-colours.html"[^>]*?>)EXPLORE COLOURS(</a>)', r'\1<span data-i18n="nav.explore">EXPLORE COLOURS</span>\2', html)
    html = re.sub(r'(<a href="#"[^>]*?>)OFFERS(</a>)', r'\1<span data-i18n="nav.offers">OFFERS</span>\2', html)
    html = re.sub(r'<span class="menu-title">Menu</span>', '<span class="menu-title" data-i18n="nav.menu">Menu</span>', html)

    # index.html specifics
    if file == 'index.html':
        html = html.replace('<p class="welcome-text">WELCOME TO COLOURWORLD</p>', '<p class="welcome-text" data-i18n="hero.welcome">WELCOME TO COLOURWORLD</p>')
        html = html.replace('<h1>Bring <span class="highlight-text">Colour</span><br>To Life.</h1>', '<h1><span data-i18n="hero.title">Bring Colour To Life.</span></h1>')
        html = html.replace('<p class="hero-subtitle">Premium paints, finishes and solutions for beautiful spaces.</p>', '<p class="hero-subtitle" data-i18n="hero.subtitle">Premium paints, finishes and solutions for beautiful spaces.</p>')
        html = html.replace('Shop Paints <svg', '<span data-i18n="hero.btnShop">Shop Paints</span> <svg')
        html = html.replace('Explore Colours <svg', '<span data-i18n="hero.btnExplore">Explore Colours</span> <svg')
        
    # shop-paints.html specifics
    if file == 'shop-paints.html':
        html = html.replace('<h1 class="shop-page-title">Shop Paints</h1>', '<h1 class="shop-page-title" data-i18n="shop.title">Shop Paints</h1>')
        html = html.replace('<p class="shop-page-subtitle">Find the right paint and essentials for your home.</p>', '<p class="shop-page-subtitle" data-i18n="shop.subtitle">Find the right paint and essentials for your home.</p>')
        html = html.replace('placeholder="Search paints, colours, products..."', 'placeholder="Search paints, colours, products..." data-i18n-placeholder="shop.searchPlaceholder"')
        html = html.replace('<button class="pill active">All</button>', '<button class="pill active" data-i18n="shop.filters.all">All</button>')
        html = html.replace('</svg> Interior Paints</button>', '</svg> <span data-i18n="shop.filters.interior">Interior Paints</span></button>')
        html = html.replace('</svg> Exterior Paints</button>', '</svg> <span data-i18n="shop.filters.exterior">Exterior Paints</span></button>')
        html = html.replace('</svg> Waterproofing</button>', '</svg> <span data-i18n="shop.filters.waterproofing">Waterproofing</span></button>')
        html = html.replace('</svg> Primers</button>', '</svg> <span data-i18n="shop.filters.primers">Primers</span></button>')
        html = html.replace('</svg> Wood & Metal</button>', '</svg> <span data-i18n="shop.filters.woodMetal">Wood & Metal</span></button>')
        html = html.replace('</svg> Tools & Accessories</button>', '</svg> <span data-i18n="shop.filters.tools">Tools & Accessories</span></button>')
        html = html.replace('<h2>Discounted 🎁<br>Products</h2>', '<h2 data-i18n="shop.discount.title">Discounted 🎁<br>Products</h2>')
        html = html.replace('<p>Limited period offers on<br>best-selling products.</p>', '<p data-i18n="shop.discount.subtitle">Limited period offers on<br>best-selling products.</p>')
        html = html.replace('View All Offers <svg', '<span data-i18n="shop.discount.viewAll">View All Offers</span> <svg')

    # explore-colours.html specifics
    if file == 'explore-colours.html':
        html = html.replace('<h1>Find a <span class="highlight-text">Colour</span><br>You\'ll Love.</h1>', '<h1><span data-i18n="explore.title1">Find a</span> <span class="highlight-text" data-i18n="explore.title2">Colour</span><br><span data-i18n="explore.title3">You\'ll Love.</span></h1>')
        html = html.replace('<p>Explore beautiful shades and find the perfect colour for your space.</p>', '<p data-i18n="explore.subtitle">Explore beautiful shades and find the perfect colour for your space.</p>')
        html = html.replace('Explore Shades <svg', '<span data-i18n="explore.btnShades">Explore Shades</span> <svg')
        html = html.replace('</svg> Visualize Your Room</button>', '</svg> <span data-i18n="explore.btnVisualize">Visualize Your Room</span></button>')
        html = html.replace('<h2>Explore by Colour</h2>', '<h2 data-i18n="explore.exploreByColor">Explore by Colour</h2>')
        html = html.replace('View All <svg', '<span data-i18n="explore.viewAll">View All</span> <svg')
        html = html.replace('<h2>Colours for Every Space</h2>', '<h2 data-i18n="explore.colorsSpace">Colours for Every Space</h2>')
        html = html.replace('<h4>Living Room</h4>', '<h4 data-i18n="explore.spaces.living">Living Room</h4>')
        html = html.replace('<p>Warm & welcoming</p>', '<p data-i18n="explore.spaces.livingSub">Warm & welcoming</p>')
        html = html.replace('<h4>Bedroom</h4>', '<h4 data-i18n="explore.spaces.bedroom">Bedroom</h4>')
        html = html.replace('<p>Calm & relaxing</p>', '<p data-i18n="explore.spaces.bedroomSub">Calm & relaxing</p>')
        html = html.replace('<h4>Exterior</h4>', '<h4 data-i18n="explore.spaces.exterior">Exterior</h4>')
        html = html.replace('<p>Fresh & lasting</p>', '<p data-i18n="explore.spaces.exteriorSub">Fresh & lasting</p>')
        html = html.replace('<h2>See Your Colour Come Alive</h2>', '<h2 data-i18n="explore.seeAlive">See Your Colour Come Alive</h2>')
        html = html.replace('<button class="room-tab active" data-target="living-room">Living Room</button>', '<button class="room-tab active" data-target="living-room" data-i18n="explore.spaces.living">Living Room</button>')
        html = html.replace('<button class="room-tab" data-target="bedroom">Bedroom</button>', '<button class="room-tab" data-target="bedroom" data-i18n="explore.spaces.bedroom">Bedroom</button>')
        html = html.replace('<button class="room-tab" data-target="exterior">Exterior</button>', '<button class="room-tab" data-target="exterior" data-i18n="explore.spaces.exterior">Exterior</button>')

    # product-details.html specifics
    if file == 'product-details.html':
        html = html.replace('<span>Home</span>', '<span data-i18n="details.home">Home</span>')
        html = html.replace('<span class="current">Shop Paints</span>', '<span class="current" data-i18n="details.shop">Shop Paints</span>')
        html = html.replace('MRP (Incl. of all taxes)', '<span data-i18n="details.mrp">MRP (Incl. of all taxes)</span>')
        html = html.replace('<h3>Choose Size</h3>', '<h3 data-i18n="details.chooseSize">Choose Size</h3>')
        html = html.replace('<span>Qty:</span>', '<span data-i18n="details.qty">Qty:</span>')
        html = html.replace('Add to Cart <svg', '<span data-i18n="details.addToCart">Add to Cart</span> <svg')
        html = html.replace('<button class="buy-now-btn">Buy Now</button>', '<button class="buy-now-btn" data-i18n="details.buyNow">Buy Now</button>')
        html = html.replace('<h4>Delivery Available</h4>', '<h4 data-i18n="details.delivery">Delivery Available</h4>')
        html = html.replace('<p>Check pincode for exact delivery timeline</p>', '<p data-i18n="details.deliverySub">Check pincode for exact delivery timeline</p>')
        html = html.replace('<h3>Your Local Paint Partner</h3>', '<h3 data-i18n="localStore.title">Your Local Paint Partner</h3>')
        html = html.replace('<span class="act-text">Get Directions</span>', '<span class="act-text" data-i18n="localStore.directions">Get Directions</span>')
        html = html.replace('<span class="act-text">Call Store</span>', '<span class="act-text" data-i18n="localStore.call">Call Store</span>')
        html = html.replace('<div class="timing-label">Opening Hours:</div>', '<div class="timing-label" data-i18n="localStore.hours">Opening Hours:</div>')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)

print("HTML files successfully modified for i18n.")
