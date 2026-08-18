import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ColoursPage() {
  useEffect(() => {
    document.body.classList.add('explore-page');
    return () => {
      document.body.classList.remove('explore-page');
    };
  }, []);
  return (
    <>


    {/* MAIN CONTENT */}
    <main className="explore-main">
        
        {/* HERO SECTION */}
        <section className="explore-hero">
            <div className="explore-hero-content">
                <h1><span data-i18n="explore.title1">Find a</span> <span className="highlight-text" data-i18n="explore.title2">Colour</span><br /><span data-i18n="explore.title3">You'll Love.</span></h1>
                <p data-i18n="explore.subtitle">Explore beautiful shades and find the perfect colour for your space.</p>
                
                <div className="explore-hero-actions">
                    <button className="btn-dark-green"><span data-i18n="explore.btnShades">Explore Shades</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
                    <button className="btn-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> <span data-i18n="explore.btnVisualize">Visualize Your Room</span></button>
                </div>
            </div>
            <div className="swatch-pill-container">
                <div className="swatch-pill">
                    <div className="sw-circle" style={{ backgroundColor: '#F0EDE1' }}></div>
                    <div className="sw-circle" style={{ backgroundColor: '#A2AB7C' }}></div>
                    <div className="sw-circle" style={{ backgroundColor: '#DAC0A8' }}></div>
                    <div className="sw-circle" style={{ backgroundColor: '#A3C7D6' }}></div>
                    <div className="sw-circle" style={{ backgroundColor: '#F1B69B' }}></div>
                    <div className="sw-circle" style={{ backgroundColor: '#E2AD2C' }}></div>
                    <div className="sw-circle" style={{ backgroundColor: '#274C65' }}></div>
                </div>
            </div>
        </section>

        {/* EXPLORE BY COLOUR */}
        <section className="section explore-by-colour">
            <div className="section-header">
                <h2 data-i18n="explore.exploreByColor">Explore by Colour</h2>
                <Link to="#" className="view-all"><span data-i18n="explore.viewAll">View All</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            </div>
            
            <div className="horizontal-scroll-container hide-scrollbar">
                {/* Card 1 */}
                <div className="colour-family-card">
                    <div className="icon-top-left"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></div>
                    <div className="overlapping-circles">
                        <div className="oc" style={{ backgroundColor: '#F2BA9A' }}></div>
                        <div className="oc" style={{ backgroundColor: '#E89A7B' }}></div>
                        <div className="oc" style={{ backgroundColor: '#EFAD82' }}></div>
                    </div>
                    <p className="family-name">Peach • Terracotta • Mustard</p>
                </div>
                
                {/* Card 2 */}
                <div className="colour-family-card">
                    <div className="icon-top-left"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3498DB" strokeWidth="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" /></svg></div>
                    <div className="overlapping-circles">
                        <div className="oc" style={{ backgroundColor: '#B3D1DB' }}></div>
                        <div className="oc" style={{ backgroundColor: '#9EC0B8' }}></div>
                        <div className="oc" style={{ backgroundColor: '#799793' }}></div>
                    </div>
                    <p className="family-name">Blue • Green • Teal</p>
                </div>

                {/* Card 3 */}
                <div className="colour-family-card">
                    <div className="icon-top-left"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AC0D" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></div>
                    <div className="overlapping-circles">
                        <div className="oc" style={{ backgroundColor: '#DED3C4' }}></div>
                        <div className="oc" style={{ backgroundColor: '#DBC8B5' }}></div>
                        <div className="oc" style={{ backgroundColor: '#CDCCCA' }}></div>
                    </div>
                    <p className="family-name">White • Beige • Grey</p>
                </div>

                {/* Card 4 */}
                <div className="colour-family-card">
                    <div className="icon-top-left"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F1C40F" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg></div>
                    <div className="overlapping-circles">
                        <div className="oc" style={{ backgroundColor: '#EBC32E' }}></div>
                        <div className="oc" style={{ backgroundColor: '#BA3E36' }}></div>
                        <div className="oc" style={{ backgroundColor: '#2D586F' }}></div>
                    </div>
                    <p className="family-name">Yellow • Red • Deep Blue</p>
                </div>
            </div>
        </section>

        {/* COLOURS FOR EVERY SPACE */}
        <section className="section colours-space">
            <div className="section-header">
                <h2 data-i18n="explore.colorsSpace">Colours for Every Space</h2>
                <Link to="#" className="view-all"><span data-i18n="explore.viewAll">View All</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            </div>
            
            <div className="horizontal-scroll-container hide-scrollbar">
                {/* Space 1 */}
                <div className="space-card">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Living Room" />
                    <div className="space-icon-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
                    <div className="space-info">
                        <h4 data-i18n="explore.spaces.living">Living Room</h4>
                        <p data-i18n="explore.spaces.livingSub">Warm & welcoming</p>
                    </div>
                </div>

                {/* Space 2 */}
                <div className="space-card">
                    <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Bedroom" />
                    <div className="space-icon-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /><path d="M2 10h20v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10z" /></svg></div>
                    <div className="space-info">
                        <h4 data-i18n="explore.spaces.bedroom">Bedroom</h4>
                        <p data-i18n="explore.spaces.bedroomSub">Calm & relaxing</p>
                    </div>
                </div>

                {/* Space 3 */}
                <div className="space-card">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Exterior" />
                    <div className="space-icon-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></div>
                    <div className="space-info">
                        <h4 data-i18n="explore.spaces.exterior">Exterior</h4>
                        <p data-i18n="explore.spaces.exteriorSub">Fresh & lasting</p>
                    </div>
                </div>
                
                {/* Space 4 */}
                <div className="space-card">
                    <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Kitchen" />
                    <div className="space-icon-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                    <div className="space-info">
                        <h4>Kitchen</h4>
                        <p>Clean & vibrant</p>
                    </div>
                </div>
            </div>
        </section>

        {/* POPULAR COLOURS RIGHT NOW */}
        <section className="section popular-colours">
            <div className="section-header">
                <h2>Popular Colours Right Now</h2>
                <Link to="#" className="view-all"><span data-i18n="explore.viewAll">View All</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            </div>
            
            <div className="horizontal-scroll-container hide-scrollbar">
                {/* Color 1 */}
                <div className="pop-color-card">
                    <div className="color-block" style={{ backgroundColor: '#A2AB7C' }}></div>
                    <div className="color-info">
                        <h4>Olive Mist</h4>
                        <p>Shade 7845</p>
                        <Link to="#" className="view-shade-link">View Shade <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                </div>
                
                {/* Color 2 */}
                <div className="pop-color-card">
                    <div className="color-block" style={{ backgroundColor: '#DDC8AE' }}></div>
                    <div className="color-info">
                        <h4>Warm Sand</h4>
                        <p>Shade 2368</p>
                        <Link to="#" className="view-shade-link">View Shade <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                </div>

                {/* Color 3 */}
                <div className="pop-color-card">
                    <div className="color-block" style={{ backgroundColor: '#9DBED0' }}></div>
                    <div className="color-info">
                        <h4>Sky Blue</h4>
                        <p>Shade 5124</p>
                        <Link to="#" className="view-shade-link">View Shade <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                </div>

                {/* Color 4 */}
                <div className="pop-color-card">
                    <div className="color-block" style={{ backgroundColor: '#F6B8A2' }}></div>
                    <div className="color-info">
                        <h4>Soft Peach</h4>
                        <p>Shade 3021</p>
                        <Link to="#" className="view-shade-link">View Shade <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                </div>

                {/* Color 5 */}
                <div className="pop-color-card">
                    <div className="color-block" style={{ backgroundColor: '#D3D3D3' }}></div>
                    <div className="color-info">
                        <h4>Dove Grey</h4>
                        <p>Shade 8321</p>
                        <Link to="#" className="view-shade-link">View Shade <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                </div>
            </div>
        </section>

        {/* SEE YOUR COLOUR COME ALIVE */}
        <section className="section come-alive">
            <h2 className="come-alive-title">See Your Colour Come Alive</h2>
            
            <div className="room-tabs">
                <button className="room-tab active" data-target="living-room">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19h16v2H4zM20 14H4v5h16v-5zM6 14v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    Living Room
                </button>
                <button className="room-tab" data-target="bedroom">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /><path d="M2 10h20v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10z" /></svg>
                    Bedroom
                </button>
                <button className="room-tab" data-target="exterior">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    Exterior
                </button>
            </div>
            
            <div className="interactive-viewer">
                <div className="viewer-img-container">
                    <img id="viewerImage" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Room View" />
                    
                    <button className="viewer-nav prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                    <button className="viewer-nav next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
                    
                    <div className="swatch-pill-container viewer-swatches">
                        <div className="swatch-pill">
                            <div className="sw-circle" style={{ backgroundColor: '#F0EDE1' }} data-color="White Whisper" data-shade="4521" data-desc="Clean, crisp and bright."></div>
                            <div className="sw-circle active" style={{ backgroundColor: '#A2AB7C' }} data-color="Olive Mist" data-shade="7845" data-desc="Soft, natural and calming."></div>
                            <div className="sw-circle" style={{ backgroundColor: '#DAC0A8' }} data-color="Warm Sand" data-shade="2368" data-desc="Earthy, cozy and grounded."></div>
                            <div className="sw-circle" style={{ backgroundColor: '#A3C7D6' }} data-color="Sky Blue" data-shade="5124" data-desc="Fresh, airy and expansive."></div>
                            <div className="sw-circle" style={{ backgroundColor: '#E2E2E2' }} data-color="Dove Grey" data-shade="8321" data-desc="Modern, sleek and sophisticated."></div>
                            <div className="sw-circle" style={{ backgroundColor: '#F1B69B' }} data-color="Soft Peach" data-shade="3021" data-desc="Warm, inviting and delicate."></div>
                            <div className="sw-circle" style={{ backgroundColor: '#E2AD2C' }} data-color="Golden Sun" data-shade="1904" data-desc="Vibrant, joyful and energetic."></div>
                            <div className="sw-circle" style={{ backgroundColor: '#274C65' }} data-color="Deep Teal" data-shade="6401" data-desc="Rich, dramatic and luxurious."></div>
                        </div>
                    </div>
                </div>
                
                <div className="selected-color-info">
                    <div className="sci-left">
                        <div className="sci-circle" id="sciCircle" style={{ backgroundColor: '#A2AB7C' }}></div>
                        <div className="sci-text">
                            <h4 id="sciName">Olive Mist</h4>
                            <p id="sciShade">Shade 7845</p>
                        </div>
                    </div>
                    <div className="sci-desc" id="sciDesc">Soft, natural and calming.</div>
                    <button className="btn-dark-green sci-btn">View Matching Paints <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
                </div>
            </div>
        </section>

        {/* CTA BANNERS */}
        <section className="explore-ctas">
            <div className="cta-banner">
                <div className="cta-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6a7638" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.1 7.1"/></svg>
                </div>
                <div className="cta-text">
                    <h4>Not Sure Which Colour to Choose?</h4>
                    <p>Tell us about your space and we'll help you find a shade that works.</p>
                </div>
                <button className="btn-outline-green"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg> Get Colour Advice</button>
            </div>

            <div className="cta-banner filled">
                <div className="cta-icon-wrap white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M8 6h8M8 10h8M8 14h4"/></svg>
                </div>
                <div className="cta-text">
                    <h4>Found Your Colour?</h4>
                    <p>Now find the paint that's made for it.</p>
                </div>
                <button className="btn-white-green">Shop Matching Paints <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
            </div>
        </section>
        
    </main>

    
    </>
  );
}
