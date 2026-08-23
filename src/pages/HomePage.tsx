import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VISUALIZE_COLORS = [
  { id: 'c1', hex: '#dfc7a7', name: 'Warm Sand', desc: 'Warm, inviting and earthy.' },
  { id: 'c2', hex: '#938c35', name: 'Olive Mist', desc: 'Soft, natural and calming.' },
  { id: 'c3', hex: '#f1b27b', name: 'Soft Peach', desc: 'Gentle, soothing and cheerful.' },
  { id: 'c4', hex: '#a4bdd3', name: 'Sky Blue', desc: 'Airy, fresh and expansive.' },
  { id: 'c5', hex: '#b4b6b6', name: 'Stone Grey', desc: 'Modern, neutral and elegant.' },
  { id: 'c6', hex: '#ffffff', name: 'Pure White', desc: 'Crisp, clean and timeless.' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [activeColor, setActiveColor] = useState(VISUALIZE_COLORS[1]);
  return (
    <>
<div className="hero-section">
        

        <main className="hero-content" style={{ paddingTop: "100px" }}>
            <p className="welcome-text" data-i18n="hero.welcome">WELCOME TO COLOURWORLD</p>
            <div className="gradient-line"></div>
            <h1 className="main-heading">
                <span data-i18n="hero.title1">Bring</span><br />
                <span className="highlight" data-i18n="hero.title2">Colour</span><br />
                <span data-i18n="hero.title3">To Life</span>
            </h1>
            
            <p className="description">
                <span data-i18n="hero.subtitle1">Premium paints, finishes and solutions</span><br className="desktop-br" />
                <span data-i18n="hero.subtitle2">for beautiful spaces.</span>
            </p>

            <div className="cta-buttons">
                <Link to="/shop-paints.html" className="btn btn-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="btn-icon">
                        <path d="M8 9V7c0-2.2 1.8-4 4-4s4 1.8 4 4v2" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M5 9h14l1.5 12H3.5L5 9z" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    <span className="btn-text">
                        <span data-i18n="hero.btnShop1">SHOP</span>
                        <span data-i18n="hero.btnShop2">PAINTS</span>
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <Link to="#" className="btn btn-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="btn-text">
                        <span>CONTACT</span>
                        <span>US</span>
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>

            <div className="bottom-features">
                <div className="feature-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4"/>
                    </svg>
                    <div className="feature-text">
                        <span className="feature-title"><span data-i18n="features.authTitle">AUTHENTIC<br />SRIRAMAENT</span></span>
                        <span className="feature-sub"><span data-i18n="features.authSub">100% Genuine<br />Products</span></span>
                    </div>
                </div>
                

                
                <div className="feature-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="feature-text">
                        <span className="feature-title"><span data-i18n="features.trustTitle">TRUSTED<br />EXPERTS</span></span>
                        <span className="feature-sub"><span data-i18n="features.trustSub">Colour<br />Guidance</span></span>
                    </div>
                </div>
    

                
                <div className="feature-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3h14v10H3V3zM17 7h4l2 3v3h-6V7zM3 13h18M6 16v3M18 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 13v-3h-4v3" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <div className="feature-text">
                        <span className="feature-title"><span data-i18n="features.fastTitle">FAST & SAFE<br />DELIVERY</span></span>
                        <span className="feature-sub"><span data-i18n="features.fastSub">On Time,<br />Every Time</span></span>
                    </div>
                </div>
    

                
                <div className="feature-item">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="feature-text">
                        <span className="feature-title"><span data-i18n="features.qualTitle">QUALITY<br />ASSURED</span></span>
                        <span className="feature-sub"><span data-i18n="features.qualSub">Beautiful<br />Spaces</span></span>
                    </div>
                </div>
            </div>
        </main>
    </div>
    
    <section className="shop-category" id="shop">
        <div className="shop-container">
            <div className="shop-header-grid">
                <div className="shop-header" style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
                    <span className="eyebrow" style={{ marginBottom: '16px', position: 'relative', color: '#CFA579' }}>
                        <span data-i18n="shopCategories.eyebrow">SHOP WHAT YOU NEED</span>
                        <span style={{ display: 'block', width: '30px', height: '2px', background: '#CFA579', margin: '8px auto 0' }}></span>
                    </span>
                    <h2 className="shop-title" style={{ marginBottom: '8px' }}><span data-i18n="shopCategories.title1">Choose the right product for</span> <span style={{ color: '#E2B659' }} data-i18n="shopCategories.title2">your home.</span></h2>
                    <p className="shop-subtitle"><span data-i18n="shopCategories.sub">Quality paints and solutions for every surface and every need.</span></p>
                </div>
            </div>

            {/* MOBILE CAROUSEL (Kept intact per user request) */}
            <div className="category-grid mobile-category-grid">
                <Link to="#" className="cat-card card-interior">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop" alt="Interior Paints" className="card-bg" />
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16M8 3v18M16 3v18M12 10v4"/></svg>
                        </div>
                        <h3 data-i18n="shopCategories.interior">INTERIOR<br />PAINTS</h3>
                        <p data-i18n="shopCategories.interiorSub">Smooth finishes for<br />walls that feel like home.</p>
                        <div className="explore-link"><span data-i18n="shopCategories.explore">Explore Collection</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                        <div className="color-chips">
                            <span style={{ background: '#D5CBB9' }}></span><span style={{ background: '#A3805B' }}></span><span style={{ background: '#6B705C' }}></span><span style={{ background: '#4A6382' }}></span>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="cat-card card-exterior">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Exterior Paints" className="card-bg" />
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h3 data-i18n="shopCategories.exterior">EXTERIOR<br />PAINTS</h3>
                        <p data-i18n="shopCategories.exteriorSub">Long-lasting colour<br />made for the outside world.</p>
                        <div className="explore-link"><span data-i18n="shopCategories.explore">Explore Collection</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                        <div className="color-chips">
                            <span style={{ background: '#6B705C' }}></span><span style={{ background: '#4A4A4A' }}></span><span style={{ background: '#2A2A2A' }}></span><span style={{ background: '#D5CBB9' }}></span>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="cat-card card-waterproofing">
                    <img src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop" alt="Waterproofing" className="card-bg" />
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
                        </div>
                        <h3 data-i18n="shopCategories.water">WATER-<br />PROOFING</h3>
                        <p data-i18n="shopCategories.waterSub">Protection where<br />your walls need it most.</p>
                        <div className="explore-link"><span data-i18n="shopCategories.explore">Explore Collection</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                        <div className="color-chips">
                            <span style={{ background: '#3A5A78' }}></span><span style={{ background: '#4A5A6A' }}></span><span style={{ background: '#2A3A4A' }}></span><span style={{ background: '#5A6A78' }}></span>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="cat-card card-tools">
                    <img src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop" alt="Tools & Accessories" className="card-bg" />
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                        </div>
                        <h3 data-i18n="shopCategories.tools">TOOLS &<br />ACCESSORIES</h3>
                        <p data-i18n="shopCategories.toolsSub">Everything you need<br />to complete the job.</p>
                        <div className="explore-link"><span data-i18n="shopCategories.explore">Explore Collection</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                        <div className="color-chips">
                            <span style={{ background: '#F0BC51' }}></span><span style={{ background: '#B4B4B4' }}></span><span style={{ background: '#707070' }}></span><span style={{ background: '#2A2A2A' }}></span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* DESKTOP GRID (100% Match for new image) */}
            <div className="category-grid-desktop">
                <Link to="#" className="desktop-cat-card theme-yellow">
                    <div className="d-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" className="d-card-bg" alt="Interior" />
                    </div>
                    <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png" className="d-card-bucket" alt="Bucket" />
                    <div className="d-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
                    <div className="d-card-content">
                        <h3 data-i18n="shopCategories.interior">INTERIOR PAINTS</h3>
                        <p data-i18n="shopCategories.interiorDesc">Ghar ke andar ke liye</p>
                        <div className="d-explore-btn"><span data-i18n="shopCategories.viewProd">View Products</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                    </div>
                </Link>
                
                <Link to="#" className="desktop-cat-card theme-blue">
                    <div className="d-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" className="d-card-bg" alt="Exterior" />
                    </div>
                    <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/apcolite-premium-emulsion-new-packshot.png" className="d-card-bucket" alt="Bucket" />
                    <div className="d-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></div>
                    <div className="d-card-content">
                        <h3 data-i18n="shopCategories.exterior">EXTERIOR PAINTS</h3>
                        <p data-i18n="shopCategories.exteriorDesc">Ghar ke bahar ke liye</p>
                        <div className="d-explore-btn"><span data-i18n="shopCategories.viewProd">View Products</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                    </div>
                </Link>

                <Link to="#" className="desktop-cat-card theme-teal">
                    <div className="d-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop" className="d-card-bg" alt="Waterproofing" />
                    </div>
                    <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-aqualock-asian-paints.png" className="d-card-bucket" alt="Bucket" />
                    <div className="d-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg></div>
                    <div className="d-card-content">
                        <h3 data-i18n="shopCategories.waterDesk">WATERPROOFING</h3>
                        <p data-i18n="shopCategories.waterDesc">Seelan aur paani se protection</p>
                        <div className="d-explore-btn"><span data-i18n="shopCategories.viewProd">View Products</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                    </div>
                </Link>

                <Link to="#" className="desktop-cat-card theme-purple">
                    <div className="d-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop" className="d-card-bg" alt="Essentials" />
                    </div>
                    <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/Nilaya-Arc-Matt-new.png" className="d-card-bucket" alt="Bucket" />
                    <div className="d-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                    <div className="d-card-content">
                        <h3 data-i18n="shopCategories.toolsDesk">PAINTING ESSENTIALS</h3>
                        <p data-i18n="shopCategories.toolsDesc">Brush, roller, primer aur tools</p>
                        <div className="d-explore-btn"><span data-i18n="shopCategories.viewProd">View Products</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                    </div>
                </Link>
            </div>

            {/* VIEW MORE BUTTON */}
            <div className="view-all-container">
                <Link to="#" className="view-all-btn">
                    <span data-i18n="shopCategories.viewAll">View All Categories</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
            </div>
        </div>
    </section>

    {/* <span data-i18n="popular.eyebrow">POPULAR PRODUCTS</span> SECTION */}
    <section className="popular-products" id="popular-products">
        <div className="container">
            <div className="pop-header">
                <div className="pop-eyebrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                    <span data-i18n="popular.eyebrow">POPULAR PRODUCTS</span>
                </div>
                <h2 data-i18n="popular.title">Find Your Perfect Paint</h2>
                <p data-i18n="popular.sub">Popular Asian Paints products, selected for every kind of home.</p>
                <div className="pop-divider"></div>
            </div>

            <div className="pop-grid">
                {/* Card 1: Purple */}
                <div className="pop-card pop-theme-purple">
                    <div className="pop-img-box">
                        <div className="pop-float-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png" alt="Royale Luxury Emulsion" className="pop-bucket-img" />
                    </div>
                    <div className="pop-content">
                        <span className="pop-tag" data-i18n="popular.tagInt">INTERIOR PAINT</span>
                        <h3 className="pop-title">Royale Luxury Emulsion</h3>
                        <p className="pop-desc" data-i18n="popular.desc1">Rich finish for beautiful interiors.</p>
                        
                        <div className="pop-price-row">
                            <span className="pop-price">₹1,350</span>
                            <span className="pop-price-old">₹1,928</span>
                            <span className="pop-discount" data-i18n="popular.off30">30% OFF</span>
                            <span className="pop-size-unit">(4L)</span>
                        </div>
                        
                        <div className="pop-sizes">
                            <button className="pop-size-btn">1L</button>
                            <button className="pop-size-btn active">4L</button>
                            <button className="pop-size-btn">10L</button>
                        </div>
                        
                        <button className="pop-btn" onClick={() => navigate('/product-details.html?id=royale-luxury-emulsion')}>
                            <span data-i18n="popular.view">View Product</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

                {/* Card 2: Green */}
                <div className="pop-card pop-theme-green">
                    <div className="pop-img-box">
                        <div className="pop-float-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </div>
                        <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-all-protek-shyne-packshot-asian-paints.png" alt="Apex Ultima Protek" className="pop-bucket-img" />
                    </div>
                    <div className="pop-content">
                        <span className="pop-tag" data-i18n="popular.tagExt">EXTERIOR PAINT</span>
                        <h3 className="pop-title">Apex Ultima Protek</h3>
                        <p className="pop-desc" data-i18n="popular.desc2">Weather protection with long lasting beauty.</p>
                        
                        <div className="pop-price-row">
                            <span className="pop-price">₹1,280</span>
                            <span className="pop-price-old">₹1,600</span>
                            <span className="pop-discount" data-i18n="popular.off20">20% OFF</span>
                            <span className="pop-size-unit">(4L)</span>
                        </div>
                        
                        <div className="pop-sizes">
                            <button className="pop-size-btn">1L</button>
                            <button className="pop-size-btn active">4L</button>
                            <button className="pop-size-btn">10L</button>
                        </div>
                        
                        <button className="pop-btn" onClick={() => navigate('/product-details.html?id=apex-ultima-protek')}>
                            <span data-i18n="popular.view">View Product</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

                {/* Card 3: Blue */}
                <div className="pop-card pop-theme-blue">
                    <div className="pop-img-box">
                        <div className="pop-float-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
                        </div>
                        <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/neobharat.png" alt="SmartCare Damp Proof" className="pop-bucket-img" />
                    </div>
                    <div className="pop-content">
                        <span className="pop-tag" data-i18n="popular.tagWater">WATERPROOFING</span>
                        <h3 className="pop-title">SmartCare Damp Proof</h3>
                        <p className="pop-desc" data-i18n="popular.desc3">Protects walls from dampness and leakage.</p>
                        
                        <div className="pop-price-row">
                            <span className="pop-price">₹1,150</span>
                            <span className="pop-price-old">₹1,437</span>
                            <span className="pop-discount" data-i18n="popular.off20">20% OFF</span>
                            <span className="pop-size-unit">(4L)</span>
                        </div>
                        
                        <div className="pop-sizes">
                            <button className="pop-size-btn">1L</button>
                            <button className="pop-size-btn active">4L</button>
                            <button className="pop-size-btn">10L</button>
                        </div>
                        
                        <button className="pop-btn" onClick={() => navigate('/product-details.html?id=smartcare-damp-proof')}>
                            <span data-i18n="popular.view">View Product</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>

                {/* Card 4: Pink */}
                <div className="pop-card pop-theme-pink">
                    <div className="pop-img-box">
                        <div className="pop-float-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="10" rx="2" ry="2" /><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" /></svg>
                        </div>
                        <img src="https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-asian-paints.png" alt="Tractor Emulsion" className="pop-bucket-img" />
                    </div>
                    <div className="pop-content">
                        <span className="pop-tag" data-i18n="popular.tagInt">INTERIOR PAINT</span>
                        <h3 className="pop-title">Tractor Emulsion</h3>
                        <p className="pop-desc" data-i18n="popular.desc4">Smooth finish for everyday interior walls.</p>
                        
                        <div className="pop-price-row">
                            <span className="pop-price">₹950</span>
                            <span className="pop-price-old">₹1,187</span>
                            <span className="pop-discount" data-i18n="popular.off20">20% OFF</span>
                            <span className="pop-size-unit">(4L)</span>
                        </div>
                        
                        <div className="pop-sizes">
                            <button className="pop-size-btn">1L</button>
                            <button className="pop-size-btn active">4L</button>
                            <button className="pop-size-btn">10L</button>
                        </div>
                        
                        <button className="pop-btn" onClick={() => navigate('/product-details.html?id=tractor-emulsion')}>
                            <span data-i18n="popular.view">View Product</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Explore Simple Button */}
            <div className="pop-explore-center" style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/shop-paints.html" className="pop-banner-btn" style={{ display: 'inline-flex' }}>
                    <span data-i18n="popular.exploreAll">Explore All Products</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
            </div>
        </div>
    </section>

    {/* SECTION 4: VISUALIZER (SEE IT. LOVE IT. PAINT IT.) */}
    <section className="vis-section" id="visualize" style={{ '--vis-theme-color': activeColor.id === 'c6' ? '#0b1120' : activeColor.hex } as React.CSSProperties}>
        <div className="vis-container">
            <div className="vis-layout">
                {/* Left Content */}
                <div className="vis-left">
                    <div className="vis-header">
                        <div className="vis-eyebrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                            <span data-i18n="vis.eyebrow">VISUALIZE. CHOOSE. PAINT.</span>
                        </div>
                        <h2 className="vis-heading">
                            <span data-i18n="vis.title1">See it.</span><br />
                            <span data-i18n="vis.title2">Love it.</span><br />
                            <span className="vis-paint-it" data-i18n="vis.title3">Paint it.</span>
                        </h2>
                        <p className="vis-subtitle" data-i18n="vis.sub">Visualize colours in your space and find your perfect shade.</p>
                        <div className="vis-divider"></div>
                    </div>

                    <div className="vis-tabs">
                        <div className="vis-tab active">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                            <span data-i18n="vis.tabLiving">Living Room</span>
                        </div>
                        <div className="vis-tab">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><rect x="3" y="11" width="18" height="9" rx="2"/><path d="M7 11v9"/><path d="M17 11v9"/></svg>
                            <span data-i18n="vis.tabBed">Bedroom</span>
                        </div>
                        <div className="vis-tab">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                            <span data-i18n="vis.tabExt">Exterior</span>
                        </div>
                    </div>

                    <div className="vis-swatch-area">
                        <div className="vis-choose-title" data-i18n="vis.choose">Choose a colour</div>
                        <div className="vis-swatches">
                            {VISUALIZE_COLORS.map(color => (
                                <div 
                                    key={color.id}
                                    className={`vis-swatch-item ${activeColor.id === color.id ? 'active' : ''}`} 
                                    onClick={() => setActiveColor(color)}
                                >
                                    <div className={`vis-swatch swatch-${color.id}`} style={{ backgroundColor: color.hex }}></div>
                                    <span className="vis-swatch-label" data-i18n={`vis.colors.${color.id}`}>{color.name}</span>
                                </div>
                            ))}
                        </div>
                        <button className="vis-cta-btn" onClick={() => navigate(`/product-details.html?id=color-${activeColor.id}&title=${encodeURIComponent(activeColor.name + ' Paint')}&price=1250`)}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M15 5l7 7-7 7"/></svg>
                            <span data-i18n="vis.explore">Explore This Colour</span>
                        </button>
                        <div className="vis-cta-footer" data-i18n="vis.seeMatching">See matching paints & products</div>
                    </div>
                </div>

                {/* Right Content (Image) */}
                <div className="vis-right" style={{ backgroundColor: activeColor.hex }}>
                    <picture>
                        <source media="(min-width: 992px)" srcSet="./assets/bg-less-colour-changer-for-pc.png" />
                        <img src="./assets/bg-less-colour-changer-for-mobile.png" alt="Living Room Visualizer" className="vis-main-img" />
                    </picture>
                    
                    <div className="vis-overlay-top-left">Living Room</div>
                    
                    <div className="vis-overlay-top-right">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                        <span className="vis-compare-text" data-i18n="vis.compare">Compare</span>
                    </div>

                    <div className="vis-overlay-bottom">
                        <div className="vis-color-circle" style={{ backgroundColor: activeColor.hex }}></div>
                        <div className="vis-color-info">
                            <div className="vis-color-name" data-i18n={`vis.colors.${activeColor.id}`}>{activeColor.name}</div>
                            <div className="vis-color-desc" data-i18n={`vis.colors.d${activeColor.id.replace('c', '')}`}>{activeColor.desc}</div>
                        </div>
                        <div className="vis-heart">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Row (Desktop) */}
            <div className="vis-features-row">
                <div className="vis-feature">
                    <div className="vis-f-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/></svg>
                    </div>
                    <div className="vis-f-text">
                        <h5 data-i18n="vis.f1Title">Curated Colour Palettes</h5>
                        <p data-i18n="vis.f1Sub">Expert combinations for every space.</p>
                    </div>
                </div>
                <div className="vis-feature">
                    <div className="vis-f-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                    </div>
                    <div className="vis-f-text">
                        <h5 data-i18n="vis.f2Title">Trusted Quality</h5>
                        <p data-i18n="vis.f2Sub">Asian Paints quality you can rely on.</p>
                    </div>
                </div>
                <div className="vis-feature">
                    <div className="vis-f-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><line x1="2" y1="22" x2="11.2" y2="12.8"/></svg>
                    </div>
                    <div className="vis-f-text">
                        <h5 data-i18n="vis.f3Title">Long Lasting Beauty</h5>
                        <p data-i18n="vis.f3Sub">Colours that stay fresh for years.</p>
                    </div>
                </div>
                <div className="vis-feature">
                    <div className="vis-f-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div className="vis-f-text">
                        <h5 data-i18n="vis.f4Title">Beautiful Finishes</h5>
                        <p data-i18n="vis.f4Sub">Matte, rich, smooth & elegant.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* SECTION 5: YOUR LOCAL PAINT PARTNER */}
    <section className="partner-section">
        <div className="partner-container">
            <div className="partner-header">
                <div className="partner-eyebrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    <span data-i18n="partner.eyebrow">YOUR LOCAL PAINT PARTNER</span>
                </div>
                <h2 className="partner-heading"><span data-i18n="partner.title1">Your Local</span> <span className="partner-green" data-i18n="partner.title2">Paint Partner.</span></h2>
                <p className="partner-sub" data-i18n="partner.sub">Quality paints, helpful guidance and easy ordering, right from your local Asian Paints store.</p>
                <div className="partner-divider"></div>
            </div>

            <div className="partner-grid">
                {/* Left: Shop Image */}
                <div className="partner-left">
                    <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Asian Paints Store Front" className="partner-img" />
                    <div className="partner-badge">
                        <img src="https://static.vecteezy.com/system/resources/previews/020/336/275/non_2x/ap-logo-ap-letter-ap-letter-logo-design-initials-ap-logo-linked-with-circle-and-uppercase-monogram-logo-ap-typography-for-technology-business-and-real-estate-brand-vector.jpg" alt="AP Icon" className="partner-badge-icon" />
                        asianpaints colourworld
                    </div>
                </div>

                {/* Right: Store Details */}
                <div className="partner-right">
                    <div className="partner-row">
                        <div className="partner-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div className="partner-info">
                            <h4 data-i18n="partner.visit">Visit Our Store</h4>
                            <p style={{ color: '#938c35', fontWeight: '700' }} data-i18n="partner.visit1">Asian Paints Colourworld</p>
                            <p data-i18n="partner.visit2">your trusted neighbourhood store</p>
                        </div>
                    </div>
                    <div className="partner-row">
                        <div className="partner-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </div>
                        <div className="partner-info">
                            <h4 data-i18n="partner.address">Store Address</h4>
                            <p data-i18n="partner.address1">Kodambahalli, Channapatna Taluk<br />Ramanagara - 562138</p>
                        </div>
                    </div>
                    <div className="partner-row">
                        <div className="partner-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <div className="partner-info">
                            <h4 data-i18n="partner.hours">Opening Hours</h4>
                            <p data-i18n="partner.hours1">Mon - Sun &bull; 9:30 AM - 8:30 PM</p>
                        </div>
                    </div>
                    <div className="partner-row">
                        <div className="partner-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className="partner-info">
                            <h4>+91 [Your Phone Number]</h4>
                            <p data-i18n="partner.callInfo">Call us for enquiries & orders</p>
                        </div>
                    </div>

                    <div className="partner-action-row">
                        <Link to="#" className="btn-partner-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                            <span data-i18n="partner.directions">Get Directions</span>
                        </Link>
                        <Link to="#" className="btn-partner-outline">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span data-i18n="partner.call">Call Store</span>
                        </Link>
                    </div>
                    <Link to="#" className="btn-partner-whatsapp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        <span data-i18n="partner.whatsapp">WhatsApp Us</span>
                    </Link>
                </div>
            </div>
        </div>

        {/* Final CTA Banner */}
       
    </section>

    {/* FOOTER */}
    
    </>
  );
}
