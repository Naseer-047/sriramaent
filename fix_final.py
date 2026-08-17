import re

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop Paints - Asian Paints</title>
    <!-- Base styles for fonts and resets -->
    <link rel="stylesheet" href="style.css?v=6">
    <!-- Specific styles for Shop page -->
    <link rel="stylesheet" href="shop.css?v=2">
    <!-- Footer styles -->
    <link rel="stylesheet" href="footer.css?v=2">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="shop-page">

    <!-- WHITE TRANSLUCENT HEADER -->
    <header class="header shop-header-white">
        <div class="logo" style="display: flex; align-items: center;">
            <div class="mobile-hamburger" style="margin-right: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </div>
            <div class="logo-text">
                <span class="brand-name" style="color: #111; font-weight: 800; font-size: 20px; letter-spacing: -1px;">sriramaent</span>
                <span class="brand-tag" style="color: #666; font-size: 11px; font-weight: 600; display: block;">colourworld</span>
            </div>
        </div>
        
        <nav class="desktop-menu">
            <ul class="desktop-links">
                <li><a href="index.html">HOME</a></li>
                <li><a href="shop-paints.html" class="active-link">SHOP PAINTS 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><path d="M6 9l6 6 6-6"/></svg>
                </a></li>
                <li><a href="#">EXPLORE COLOURS</a></li>
                <li><a href="#">PAINT VISUALIZER</a></li>
                <li><a href="#">OFFERS</a></li>
            </ul>
        </nav>

        <div class="header-right-icons">
            <button class="icon-btn search-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
            <button class="icon-btn profile-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button class="icon-btn cart-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span class="cart-badge">2</span>
            </button>
        </div>
    </header>

    <div class="mobile-search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" placeholder="Search paints, colours, products...">
    </div>

    <main class="shop-main">
        <div class="shop-container" style="max-width: 100%;">
            
            <section class="shop-content">
                <div class="shop-breadcrumbs">
                    <span>Home</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    <span class="current">Shop Paints</span>
                </div>
                
                <div class="title-row">
                    <div class="title-left">
                        <h1 class="shop-page-title">Shop Paints</h1>
                        <p class="shop-page-subtitle">Find the right paint and essentials for your home.</p>
                    </div>
                    <!-- Top Category Pills -->
                    <div class="shop-category-pills">
                        <button class="pill active">All</button>
                        <button class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg> Interior Paints</button>
                        <button class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> Exterior Paints</button>
                        <button class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Waterproofing</button>
                        <button class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> Primers</button>
                        <button class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 .5-4.5 4 1.5 6-5.5-3-5.5 3 1.5-6-4.5-4 6-.5z"/></svg> Wood & Metal</button>
                        <button class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> Tools & Accessories</button>
                    </div>
                </div>

                <!-- Discounted Products Section -->
                <div class="discount-section">
                    <div class="discount-info">
                        <h2>Discounted \u2728<br>Products</h2>
                        <p>Limited period offers on<br>best-selling products.</p>
                        <a href="#" class="view-all-link">View All Offers <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                    </div>
                    
                    <div class="discount-cards">
                        {DISCOUNT_CARDS}
                    </div>
                </div>

                <!-- Products Header -->
                <div class="products-header">
                    <div class="products-count">
                        <h2>All Paints & Products</h2>
                        <span>124 Products</span>
                    </div>
                    <div class="products-controls">
                        <div class="sort-by">
                            Sort by: <strong>Popular</strong>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div class="view-toggles">
                            <button class="view-toggle active"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button>
                            <button class="view-toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                        </div>
                    </div>
                </div>

                <!-- Product Grid -->
                <div class="product-grid">
                    {ALL_CARDS}
                </div>

                <!-- Help CTA Banner -->
                <div class="help-cta-banner">
                    <div class="help-cta-info">
                        <div class="help-cta-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                        </div>
                        <div class="help-cta-text">
                            <h4>Need help choosing the right paint?</h4>
                            <p>Talk to our store team for expert advice.</p>
                        </div>
                    </div>
                    <button class="btn-whatsapp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Chat on WhatsApp
                    </button>
                </div>

            </section>
        </div>
    </main>

    <!-- FOOTER HTML -->
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-line"></div>
                <div class="footer-top-text">
                    <i>Colour your world. One shade at a time.</i>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M11 16H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3"></path><circle cx="12" cy="16" r="1"></circle><path d="M12 17v5"></path><path d="M10 22h4"></path></svg>
                </div>
                <div class="footer-line"></div>
            </div>
            <div class="footer-main">
                <div class="footer-col footer-col-brand">
                    <h3 class="footer-brand-title">Your Local Paint Partner.</h3>
                    <p class="footer-brand-desc">Quality paints and trusted<br>Asian Paints products for<br>homes and spaces around you.</p>
                    <div class="footer-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                        An Asian Paints Colourworld Store
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">SHOP</h4>
                    <ul class="footer-links">
                        <li><a href="#">Interior Paints</a></li>
                        <li><a href="#">Exterior Paints</a></li>
                        <li><a href="#">Waterproofing</a></li>
                        <li><a href="#">Painting Essentials</a></li>
                        <li><a href="#">All Products</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">HELP</h4>
                    <ul class="footer-links">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-col footer-col-store">
                    <h4 class="footer-heading store-heading">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
                        VISIT OUR STORE
                    </h4>
                    <div class="store-info-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        <p>123, 1st Main Road, HSR Layout,<br>Sector 2, Bengaluru - 560102,<br>Karnataka, India</p>
                    </div>
                    <div class="store-info-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <p>Mon - Sun : 9:30 AM - 8:30 PM</p>
                    </div>
                    <div class="store-info-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <p class="store-phone">+91 98765 43210</p>
                    </div>
                    <div class="store-actions">
                        <a href="#" class="btn-footer-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                            Get Directions
                        </a>
                        <a href="#" class="btn-footer-outline">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Call Store
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-line"></div>
                <div class="footer-bottom-content">
                    <p class="footer-copyright">&copy; 2026 Your Store Name. All rights reserved.</p>
                    <div class="footer-policy-links">
                        <a href="#">Privacy Policy</a>
                        <span class="sep">|</span>
                        <a href="#">Terms & Conditions</a>
                        <span class="sep">|</span>
                        <a href="#">Shipping Policy</a>
                        <span class="sep">|</span>
                        <a href="#">Return Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
"""

import re
import json

js_content = open('paint boxes images/images-link-collection.js', 'r', encoding='utf-8').read()
matches = re.findall(r'"([^"]+)": "([^"]+)"', js_content)

discount_cards = ""
all_cards = ""

for i, (name_key, url) in enumerate(matches):
    clean_name = name_key.replace('-', ' ').title()
    clean_name = clean_name.replace('Interior Walls ', '').replace(' Asian Paints', '').replace(' Packshot', '').replace(' New', '')
    
    price = 1000 + i * 50
    old_price = int(price * 1.15)
    
    cat = 'Interior'
    if i % 3 == 1:
        cat = 'Exterior'
    elif i % 3 == 2:
        cat = 'Waterproofing'
        
    badge_class = f'badge-{cat.lower()}'
    
    if i < 4:
        off_percent = [15, 12, 10, 8][i]
        discount_cards += f'''
                        <div class="disc-card">
                            <img src="{url}" alt="{clean_name}">
                            <div class="disc-card-info">
                                <div class="disc-badge">{off_percent}% OFF</div>
                                <h5>{clean_name}</h5>
                                <div class="price">
                                    <span class="old-price">\u20b9{old_price:,}</span>
                                    <span class="new-price">\u20b9{price:,}</span>
                                </div>
                                <button class="disc-cart-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></button>
                            </div>
                        </div>
'''
    
    all_cards += f'''
                    <div class="product-card">
                        <button class="fav-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                        <div class="product-img-wrap">
                            <img src="{url}" alt="{clean_name}">
                        </div>
                        <div class="product-badge {badge_class}">{cat}</div>
                        <h3 class="product-title">{clean_name}</h3>
                        <div class="product-rating">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <strong>4.{8 - i%5}</strong> ({120 + i*11})
                        </div>
                        <div class="product-price">\u20b9{price:,}</div>
                        <div class="product-sizes">Sizes: 1L &bull; 4L &bull; 10L &bull; 20L</div>
                        <button class="btn-add-cart">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                    </div>
'''

final_html = html_template.replace("{DISCOUNT_CARDS}", discount_cards).replace("{ALL_CARDS}", all_cards)
with open("shop-paints.html", "w", encoding="utf-8") as f:
    f.write(final_html)

