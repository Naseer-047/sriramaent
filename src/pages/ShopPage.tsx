import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../store/CartContext';

export default function ShopPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [productsData, setProductsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProductsData(data);
        }
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleProductClick = (id: string) => {
    navigate(`/product-details.html?id=${id}`);
  };

  useEffect(() => {
    document.body.classList.add('shop-page');
    return () => {
      document.body.classList.remove('shop-page');
    };
  }, []);
  return (
    <>

    
    <div className="mobile-search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" placeholder="Search paints, colours, products..." data-i18n-placeholder="shop.searchPlaceholder" />
    </div>


    <main className="shop-main">
        <div className="shop-container" style={{ maxWidth: '100%' }}>
            
            <section className="shop-content">
                <div className="shop-breadcrumbs">
                    <span>Home</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    <span className="current">Shop Paints</span>
                </div>
                
                <div className="title-row">
                    <div className="title-left">
                        <h1 className="shop-page-title" data-i18n="shop.title">Shop Paints</h1>
                        <p className="shop-page-subtitle" data-i18n="shop.subtitle">Find the right paint and essentials for your home.</p>
                    </div>
                    {/* Top Category Pills */}
                    <div className="shop-category-pills">
                        <button className="pill active" data-i18n="shop.filters.all">All</button>
                        <button className="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg> <span data-i18n="shop.filters.interior">Interior Paints</span></button>
                        <button className="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> <span data-i18n="shop.filters.exterior">Exterior Paints</span></button>
                        <button className="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> <span data-i18n="shop.filters.waterproofing">Waterproofing</span></button>
                        <button className="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> <span data-i18n="shop.filters.primers">Primers</span></button>
                        <button className="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 .5-4.5 4 1.5 6-5.5-3-5.5 3 1.5-6-4.5-4 6-.5z"/></svg> <span data-i18n="shop.filters.woodMetal">Wood & Metal</span></button>
                        <button className="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> <span data-i18n="shop.filters.tools">Tools & Accessories</span></button>
                    </div>
                </div>

                {/* Discounted Products Section */}
                <div className="discount-section">
                    <div className="discount-info">
                        <h2>Discounted ✨<br />Products</h2>
                        <p data-i18n="shop.discount.subtitle">Limited period offers on<br />best-selling products.</p>
                        <Link to="#" className="view-all-link"><span data-i18n="shop.discount.viewAll">View All Offers</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                    </div>
                    
                    <div className="discount-cards">
                        {productsData.slice(0, 4).map((prod) => (
                            <div key={prod.id} className="disc-card" onClick={() => handleProductClick(prod.id)} style={{ cursor: "pointer" }}>
                                <img src={prod.image} alt={prod.title} />
                                <div className="disc-card-info">
                                    <div className="disc-badge">{prod.discount}</div>
                                    <h5>{prod.title}</h5>
                                    <div className="price">
                                        <span className="old-price">₹{prod.oldPrice}</span>
                                        <span className="new-price">₹{prod.price}</span>
                                    </div>
                                    <button className="disc-cart-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products Header */}
                <div className="products-header">
                    <div className="products-count">
                        <h2>All Paints & Products</h2>
                        <span>124 Products</span>
                    </div>
                    <div className="products-controls">
                        <div className="sort-by">
                            Sort by: <strong>Popular</strong>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div className="view-toggles">
                            <button className="view-toggle active"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></button>
                            <button className="view-toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                        </div>
                    </div>
                </div>
                {/* Product Grid */}
                <div className="product-grid">
                    {isLoading ? (
                        <div style={{ padding: '40px', gridColumn: '1/-1', textAlign: 'center', color: '#666' }}>
                            <div className="loading-spinner" style={{ display: 'inline-block', width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #737b2d', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '16px' }}></div>
                            <p>Loading products...</p>
                            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    ) : productsData.length === 0 ? (
                        <div style={{ padding: '40px', gridColumn: '1/-1', textAlign: 'center', color: '#666' }}>
                            <p>No products found.</p>
                        </div>
                    ) : (
                        productsData.map((prod) => (
                            <div key={prod.id} className="product-card" onClick={() => handleProductClick(prod.id)} style={{ cursor: "pointer" }}>
                                <button className="fav-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></button>
                                <div className="product-img-wrap">
                                    <img src={prod.image} alt={prod.title} />
                                </div>
                                <div className={`product-badge ${prod.badgeClass}`}>{prod.badge}</div>
                                <h3 className="product-title">{prod.title}</h3>
                                <div className="product-rating">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <strong>{prod.rating}</strong> ({prod.reviews})
                                </div>
                                <div className="product-price">₹{prod.price}</div>
                                <div className="product-sizes">Sizes: 1L &bull; 4L &bull; 10L &bull; 20L</div>
                                <button 
                                    className="btn-add-cart"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart({
                                            id: prod.id,
                                            name: prod.title,
                                            price: prod.price,
                                            quantity: 1,
                                            image: prod.image,
                                            size: prod.sizes?.[0]?.size
                                        });
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Help CTA Banner */}
                <div className="help-cta-banner">
                    <div className="help-cta-info">
                        <div className="help-cta-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
                        </div>
                        <div className="help-cta-text">
                            <h4>Need help choosing the right paint?</h4>
                            <p>Talk to our store team for expert advice.</p>
                        </div>
                    </div>
                    <button className="btn-whatsapp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        Chat on WhatsApp
                    </button>
                </div>

            </section>
        </div>
    </main>

    {/* FOOTER HTML */}
    
    
    </>
  );
}
