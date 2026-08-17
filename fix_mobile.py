import re

with open('shop.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Split at the marker
marker = '/* --- MOBILE RESPONSIVENESS (EXACT MATCH) --- */'
if marker in content:
    content = content.split(marker)[0]

new_mobile_css = """/* --- MOBILE RESPONSIVENESS (EXACT MATCH) --- */
@media (max-width: 991px) {
    body.shop-page {
        overflow-x: hidden;
    }
    .shop-header-white {
        height: 56px !important;
        padding: 0 16px !important;
    }
    
    /* Header layout fixes */
    .desktop-menu { display: none !important; }
    
    /* Show mobile hamburger, hide desktop logo, ensure alignment */
    .mobile-hamburger {
        display: flex !important;
        align-items: center;
        margin-right: 12px;
        margin-top: 2px;
    }
    .logo {
        display: flex !important;
        align-items: center !important;
    }
    .logo-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    /* Show right icons */
    .header-right-icons {
        display: flex !important;
        gap: 8px !important;
    }
    .profile-icon-btn { display: none !important; } /* Hide profile on mobile to save space */
    .search-icon-btn, .cart-btn {
        display: flex !important;
        padding: 4px !important;
    }

    .mobile-search-bar {
        display: block;
        padding: 12px 16px;
        width: 100%;
        box-sizing: border-box;
    }
    
    .shop-breadcrumbs { margin-top: 0px; margin-bottom: 12px; padding: 0 16px; }
    .title-row {
        padding: 0 16px;
        margin-bottom: 24px;
        flex-direction: column;
        gap: 16px;
    }
    .shop-page-title { font-size: 24px; margin-bottom: 4px; }
    .shop-page-subtitle { font-size: 13px; margin-bottom: 0px; }
    
    /* Category Pills Horizontal Scroll - PERFECT FIX */
    .shop-category-pills {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        padding-bottom: 8px !important;
        gap: 8px !important;
        width: 100vw;
        margin-left: -16px; /* Break out of padding */
        padding-left: 16px !important;
        padding-right: 16px !important;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }
    .shop-category-pills::-webkit-scrollbar { display: none; }
    .shop-category-pills .pill {
        flex: 0 0 auto !important;
        white-space: nowrap !important;
        height: auto !important;
        padding: 8px 16px !important;
    }
    
    /* Discount Section Mobile layout */
    .discount-section {
        flex-direction: column !important;
        align-items: stretch !important;
        padding: 16px !important;
        border-radius: 12px !important;
        margin: 0 16px 32px 16px !important; /* side margins instead of container padding */
        gap: 16px !important;
        width: auto !important;
    }
    .discount-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: transparent !important; /* Remove the background block */
        padding: 0 !important;
    }
    .discount-info h2 {
        font-size: 18px !important;
        margin: 0 !important;
        line-height: 1.2 !important;
        color: #111 !important;
    }
    .discount-info p { display: none !important; }
    .discount-info .view-all-link {
        font-size: 12px !important;
        color: #737b2d !important;
        position: relative !important;
        margin: 0 !important;
    }
    
    /* Carousel Cards - PERFECT FIX */
    .discount-cards {
        display: flex !important;
        width: calc(100vw - 32px) !important;
        margin-left: -16px !important; /* Break out of container */
        padding-left: 16px !important;
        padding-right: 16px !important;
        gap: 12px !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }
    .discount-cards::-webkit-scrollbar { display: none; }
    
    /* Transform to vertical cards on mobile */
    .disc-card {
        flex-direction: column !important;
        flex: 0 0 160px !important;
        width: 160px !important;
        min-width: 160px !important;
        padding: 12px !important;
        gap: 8px !important;
    }
    .disc-card img {
        width: 100% !important;
        height: 100px !important;
        object-fit: contain !important;
    }
    .disc-card-info {
        padding: 0 !important;
        position: static !important;
    }
    .disc-card-info h5 {
        font-size: 13px !important;
        margin-bottom: 4px !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
    }
    .disc-card-info .price {
        flex-wrap: wrap !important;
        gap: 4px !important;
        margin-bottom: 8px !important;
        flex: none !important;
    }
    .disc-card-info .old-price { font-size: 11px !important; }
    .disc-card-info .new-price { font-size: 13px !important; }
    
    /* Cart Button Inside Discount */
    .disc-cart-btn {
        position: absolute !important;
        bottom: 12px !important;
        right: 12px !important;
        width: 32px !important;
        height: 32px !important;
        padding: 0 !important;
        border-radius: 50% !important;
        background: #fdfaf3 !important;
        border: 1px solid #737b2d !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    
    /* Products Header Mobile */
    .products-header {
        flex-direction: row !important;
        align-items: center !important;
        justify-content: space-between !important;
        border: none !important;
        padding: 0 16px 12px 16px !important;
    }
    .products-count h2 { font-size: 18px !important; }
    .products-count span { display: block !important; font-size: 12px !important; }
    .products-controls { width: auto !important; justify-content: flex-end !important; }
    .sort-by {
        border: 1px solid #eee !important;
        padding: 6px 12px !important;
        border-radius: 20px !important;
        font-size: 12px !important;
    }
    
    /* 2 Column Grid for Mobile - PERFECT FIX */
    .product-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
        padding: 0 16px !important;
    }
    .product-card {
        padding: 12px !important;
        border-radius: 8px !important;
        min-width: 0 !important; /* Allow shrinking */
        width: 100% !important;
        box-sizing: border-box !important;
    }
    .product-img-wrap { height: 100px !important; margin-bottom: 12px !important; }
    .product-title { font-size: 13px !important; margin-bottom: 4px !important; line-height: 1.3 !important;}
    .product-rating { font-size: 11px !important; margin-bottom: 8px !important; }
    .product-rating svg { width: 10px !important; height: 10px !important; }
    .product-price { font-size: 15px !important; margin-bottom: 4px !important; }
    .product-sizes { font-size: 10px !important; margin-bottom: 12px !important; line-height: 1.2 !important; }
    
    .btn-add-cart {
        padding: 8px !important;
        font-size: 13px !important;
        border-radius: 4px !important;
        width: 100% !important;
    }
    
    /* Help CTA Mobile */
    .help-cta-banner {
        flex-direction: column !important;
        padding: 16px !important;
        gap: 16px !important;
        margin: 24px 16px !important;
        border-radius: 12px !important;
    }
    .help-cta-info { gap: 12px !important; width: 100% !important; align-items: flex-start !important; }
    .help-cta-text h4 { font-size: 15px !important; margin-bottom: 4px !important; }
    .help-cta-text p { font-size: 12px !important; margin: 0 !important; }
    .btn-whatsapp {
        width: 100% !important;
        justify-content: center !important;
        padding: 10px !important;
    }
}
"""

with open('shop.css', 'w', encoding='utf-8') as f:
    f.write(content + '\n' + new_mobile_css)

# Update HTML cache buster
html = open('shop-paints.html', 'r', encoding='utf-8').read()
html = html.replace('shop.css?v=4', 'shop.css?v=5')
with open('shop-paints.html', 'w', encoding='utf-8') as f:
    f.write(html)
