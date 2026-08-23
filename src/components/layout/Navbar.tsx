import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../store/CartContext';

// Custom Hook for Media Query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { cartCount } = useCart();

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);
  // Desktop search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  // Refs for clicking outside
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Scroll state for transparent navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  // Click outside to close lang dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Wire up hamburger menu to DOM elements via useEffect (replicating the original JS logic exactly)
  useEffect(() => {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    if (mobileMenu && menuOverlay) {
      if (menuOpen) {
        mobileMenu.classList.add('open');
        menuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  }, [menuOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Reset menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setLangMenuOpen(false);
  }, [location.pathname]);

  // ==================== DESKTOP NAVBAR ====================
  if (isDesktop) {
    const isTransparent = isHome; // Transparent only on home hero

    return (
      <>
        <header
          style={{
            width: '100%',
            background: isTransparent ? 'transparent' : '#fff',
            zIndex: 1000,
            position: isTransparent ? 'absolute' : 'sticky',
            top: 0,
            left: 0,
            right: 0,
            transition: 'background 0.3s ease',
          }}
        >
          {/* Single-row navbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 5%',
              height: '72px',
              gap: '32px',
              borderBottom: isTransparent ? 'none' : '1px solid #eaeaea',
            }}
          >
            {/* Logo - Single Row */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >

              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: isTransparent ? '#fff' : '#111',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.3px',
                }}
              >
                Sri Ram <span style={{ fontWeight: 500, opacity: 0.85 }}>Enterprises</span>
              </span>
            </Link>

            {/* Center Nav Links */}
            <nav style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  margin: 0,
                  padding: 0,
                }}
              >
                {(() => {
   const navLinks: { label: string, to: string, icon?: React.ReactNode, arrow?: boolean }[] = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.shop'), to: '/shop-paints.html' },
    { label: t('nav.explore'), to: '/explore-colours.html' },
    { label: t('nav.offers'), to: '#' },
  ]; return navLinks;
})().map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: isTransparent ? '#fff' : '#111',
                        textDecoration: 'none',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        fontFamily: 'var(--font-heading)',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.icon && link.icon}
                      {link.label}
                      {link.arrow && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Icons - Search (expandable) + Cart + Get In Touch */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
              {/* Expandable Search */}
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                {searchOpen && (
                  <input
                    ref={(el) => { (searchInputRef as any).current = el; }}
                    type="text"
                    placeholder="Search paints..."
                    style={{
                      width: '220px',
                      padding: '8px 16px 8px 12px',
                      borderRadius: '6px',
                      border: `1px solid ${isTransparent ? 'rgba(255,255,255,0.5)' : '#ddd'}`,
                      background: isTransparent ? 'rgba(255,255,255,0.15)' : '#F9FAFB',
                      color: isTransparent ? '#fff' : '#111',
                      fontSize: '14px',
                      outline: 'none',
                      marginRight: '8px',
                    }}
                    onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                  />
                )}
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isTransparent ? '#fff' : '#111'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </button>
              </div>

              {/* Language Dropdown */}
              <div 
                style={{ position: 'relative' }} 
                ref={langMenuRef}
                onMouseEnter={() => setLangMenuOpen(true)}
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                <button
                  className="lang-btn"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: isTransparent ? '#fff' : '#111',
                    fontWeight: 700,
                    fontSize: '13px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  <span className="current-lang-label">{i18n.language === 'kn' ? 'ಕನ್ನಡ' : 'EN'}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div
                  className={`lang-menu ${langMenuOpen ? 'show' : ''}`}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '1px solid #eee',
                    overflow: 'hidden',
                    zIndex: 100,
                    minWidth: '100px',
                  }}
                >
                  <div
                    className="lang-option"
                    onClick={() => {
                      i18n.changeLanguage('en');
                      localStorage.setItem('site_lang', 'en');
                      setLangMenuOpen(false);
                    }}
                    style={{
                      padding: '10px 16px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderBottom: '1px solid #eee',
                      transition: 'background 0.2s',
                      color: '#111'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
                  >
                    English
                  </div>
                  <div
                    className="lang-option"
                    onClick={() => {
                      i18n.changeLanguage('kn');
                      localStorage.setItem('site_lang', 'kn');
                      setLangMenuOpen(false);
                    }}
                    style={{
                      padding: '10px 16px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 600,
                      transition: 'background 0.2s',
                      color: '#111'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
                  >
                    ಕನ್ನಡ
                  </div>
                </div>
              </div>

              {/* Cart */}
              <Link
                to="/cart.html"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '4px',
                  textDecoration: 'none'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isTransparent ? '#fff' : '#111'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-4px',
                      background: '#737b2d',
                      color: '#fff',
                      fontSize: '10px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Login / Profile */}
              {isLoggedIn ? (
                <Link
                  to="/profile.html"
                  style={{
                    background: '#737b2d',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  View Profile
                </Link>
              ) : (
                <Link
                  to="/login.html"
                  style={{
                    background: '#737b2d',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  Login
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Spacer for non-home pages so content doesn't go under sticky navbar */}
        {!isTransparent && <div style={{ height: 0 }} />}
      </>
    );
  }

  // ==================== MOBILE NAVBAR ====================
  const headerClass = isHome ? 'header' : 'header shop-header-white';
  
  // Mobile navbar should be completely transparent when at the top of the Home page,
  // but become blurred (hamburger menu style) when scrolled down.
  const headerStyle: React.CSSProperties = isHome
    ? { 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: scrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent', 
        backdropFilter: scrolled ? 'blur(4px)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease'
      }
    : { position: 'sticky', top: 0, zIndex: 100 };

  return (
    <>
      <header className={headerClass} style={headerStyle}>
        <div className="logo">

          <div className="logo-text">
            <span className="brand-name">Sri Ram <span className="brand-tag"> Enterprises</span></span>
            
          </div>
        </div>

        <div className="header-right-icons">
          <button className="icon-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isHome ? '#fff' : '#111'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
          {isLoggedIn ? (
            <Link to="/profile.html" className="icon-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isHome ? '#fff' : '#111'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
          ) : (
            <Link to="/login.html" className="icon-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isHome ? '#fff' : '#111'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
          )}
          <Link to="/cart.html" className="icon-btn cart-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isHome ? '#fff' : '#111'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button
            ref={menuBtnRef}
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke={isHome ? '#fff' : '#111'} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className="mobile-menu-overlay"
        id="menuOverlay"
        onClick={() => setMenuOpen(false)}
        style={{ display: menuOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}
      />

      {/* Mobile Drawer */}
      <nav 
        className={`mobile-menu ${menuOpen ? 'open' : ''}`} 
        id="mobileMenu"
        style={{ 
          position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '280px', height: '100vh', 
          background: '#fff', color: '#111', zIndex: 1000, padding: '20px', transition: 'right 0.3s ease',
          boxShadow: '-4px 0 15px rgba(0,0,0,0.1)'
        }}
      >
        <div className="menu-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <span className="menu-title" data-i18n="nav.menu" style={{ fontSize: '18px', fontWeight: 800 }}>Menu</span>
          <button
            className="close-btn"
            id="closeMenuBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <ul className="menu-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <li><Link to="/" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}><span data-i18n="nav.home">HOME</span></Link></li>
          <li><Link to="/shop-paints.html" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}><span data-i18n="nav.shop">SHOP PAINTS</span></Link></li>
          <li><Link to="/explore-colours.html" onClick={() => setMenuOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}><span data-i18n="nav.explore">EXPLORE COLOURS</span></Link></li>
          <li><Link to="#" style={{ color: '#111', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}><span data-i18n="nav.offers">OFFERS</span></Link></li>
          <li
            className="language-toggle-mobile"
            style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}
          >
            <div style={{ fontSize: '14px', color: '#555', marginBottom: '12px' }} data-i18n="prompt.title">
              Select Language / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => i18n.changeLanguage('en')}
                style={{ flex: '1', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', color: '#111', fontFamily: 'var(--font-body)', fontWeight: '600', cursor: 'pointer' }}
              >
                English
              </button>
              <button
                onClick={() => i18n.changeLanguage('kn')}
                style={{ flex: '1', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', color: '#111', fontFamily: 'var(--font-body)', fontWeight: '600', cursor: 'pointer' }}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
