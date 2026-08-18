import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import productsData from '../data/product-data';
import { useCart } from '../store/CartContext';

// Custom Hook for Media Query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
}

// ─── Shared state hook ────────────────────────────────────────────────────────
function useProductData() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // default 4L
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let productId = searchParams.get('id');
    const productTitle = searchParams.get('title');
    const productImg = searchParams.get('img');
    const productPriceRaw = searchParams.get('price');

    if (!productId && !productTitle) {
      productId = 'interior-walls-royale-luxury-emulsion-asian-paints';
    }

    let found: any = null;
    if (productId) {
      found = productsData.find((p: any) => p.id === productId);
    }
    if (!found && productTitle) {
      found = productsData.find((p: any) => p.title.toLowerCase() === productTitle.toLowerCase());
      if (!found) {
        let basePrice = productPriceRaw ? parseInt(productPriceRaw) : 1500;
        if (isNaN(basePrice)) basePrice = 1500;
        found = {
          id: 'mock-' + Math.random().toString(36).substr(2, 9),
          title: productTitle,
          subtitle: 'Premium Paint Collection',
          image: productImg || 'https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png',
          badge: 'Popular',
          rating: '4.6',
          reviews: '128',
          discount: '10% OFF',
          price: basePrice,
          oldPrice: Math.round(basePrice * 1.18),
          sizes: [
            { size: '1L', price: Math.round(basePrice * 0.25) },
            { size: '4L', price: basePrice },
            { size: '10L', price: Math.round(basePrice * 2.4) },
            { size: '20L', price: Math.round(basePrice * 4.5) },
          ],
          details: 'This is a premium quality paint offering rich finish and durability.',
          howToApply: '1. Prepare the surface.\n2. Apply primer.\n3. Apply 2 coats.',
          specifications: [
            { label: 'Finish', value: 'Rich Matt' },
            { label: 'Coverage', value: '120-140 sq.ft/L/coat' },
            { label: 'Drying Time', value: '30 mins (Surface dry)' },
          ],
        };
      }
    }

    setProduct(found || null);
    if (found && found.sizes) {
      const defIdx = found.sizes.length > 1 ? 1 : 0;
      setSelectedSizeIndex(defIdx);
    }
    setLoading(false);
  }, [searchParams]);

  const currentSize = product?.sizes?.[selectedSizeIndex] ?? product?.sizes?.[0];
  const currentPrice = currentSize ? currentSize.price : (product?.price ?? 0);
  const oldPrice = currentSize ? Math.round(currentSize.price * 1.18) : product?.oldPrice;

  return { product, loading, selectedSizeIndex, setSelectedSizeIndex, quantity, setQuantity, currentPrice, oldPrice, currentSize };
}

function PinModal({ onClose }: { onClose: () => void }) {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1); // Prevent multiple chars
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus next input if a value is entered
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={onClose}>
      <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', width: '100%', maxWidth: '400px', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 700 }}>Check Delivery</h3>
        <p style={{ color: '#555', margin: '0 0 24px', fontSize: '14px' }}>Enter your 6-digit PIN code to check delivery availability and time.</p>
        
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', marginBottom: '24px' }}>
          {pin.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => { inputRefs.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value.replace(/\D/g, ''))}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              style={{ width: '48px', height: '56px', fontSize: '24px', fontWeight: 600, textAlign: 'center', border: '2px solid #eaeaea', borderRadius: '12px', outline: 'none', transition: 'border-color 0.2s' }}
              onFocus={(e) => e.target.style.borderColor = '#737b2d'}
              onBlur={(e) => e.target.style.borderColor = '#eaeaea'}
            />
          ))}
        </div>

        <button style={{ width: '100%', background: '#737b2d', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }} onClick={onClose}>
          Check PIN Code
        </button>
      </div>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function ProductPage() {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // fixed back to 1024px
  const navigate = useNavigate();
  const data = useProductData();
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('details-page');
    document.body.style.backgroundColor = '#ffffff';
    return () => {
      document.body.classList.remove('details-page');
      document.body.style.backgroundColor = '';
    };
  }, []);

  if (data.loading) {
    return (
      <div id="loadingState" style={{ textAlign: 'center', padding: '100px 20px', fontFamily: '"Inter",sans-serif', color: '#111' }}>
        Loading product details...
      </div>
    );
  }

  if (!data.product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: '"Inter",sans-serif', color: '#111' }}>
        <h2>Product not found</h2>
        <Link to="/shop-paints.html" style={{ color: '#737b2d', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
          ← Back to Shop
        </Link>
      </div>
    );
  }

  if (isDesktop) {
    return (
      <>
        <DesktopProductView data={data} onOpenPinModal={() => setIsPinModalOpen(true)} />
        {isPinModalOpen && <PinModal onClose={() => setIsPinModalOpen(false)} />}
      </>
    );
  }
  return (
    <>
      <MobileProductView data={data} navigate={navigate} onOpenPinModal={() => setIsPinModalOpen(true)} />
      {isPinModalOpen && <PinModal onClose={() => setIsPinModalOpen(false)} />}
    </>
  );
}

// ─── Accordion (shared) ───────────────────────────────────────────────────────
function Accordion({ title, icon, children }: { title: React.ReactNode; icon: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion" style={{ border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
      <div
        className="acc-header"
        onClick={() => setOpen(!open)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', cursor: 'pointer', background: '#fff' }}
      >
        <div className="acc-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, fontSize: '15px', color: '#111' }}>
          {icon}
          {title}
        </div>
        <svg
          className="chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div
        className="acc-content"
        style={{
          padding: open ? '0 16px 16px' : '0 16px',
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          fontSize: '14px',
          color: '#555',
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Size Grid (shared) ───────────────────────────────────────────────────────
function SizeGrid({ sizes, selectedIdx, onSelect }: { sizes: any[]; selectedIdx: number; onSelect: (i: number) => void }) {
  return (
    <div id="prodSizesGrid" className="size-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
      {sizes.map((s: any, idx: number) => {
        const isActive = idx === selectedIdx;
        return (
          <div
            key={idx}
            className={`size-card ${isActive ? 'active' : ''}`}
            onClick={() => onSelect(idx)}
            style={{
              border: `1px solid ${isActive ? '#737b2d' : '#e0e0e0'}`,
              borderRadius: '8px',
              padding: '12px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              cursor: 'pointer',
              background: isActive ? '#fdfaf3' : '#fff',
              transition: 'all 0.2s',
            }}
          >
            {isActive && (
              <span
                style={{
                  position: 'absolute',
                  top: '-9px',
                  right: '-9px',
                  background: '#737b2d',
                  color: '#fff',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
            )}
            <div className="size-vol" style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
              {s.size}
            </div>
            <div className="size-prc" style={{ fontSize: '12px', color: isActive ? '#737b2d' : '#555', fontWeight: isActive ? 600 : 400 }}>
              ₹{s.price.toLocaleString('en-IN')}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Qty Selector (shared) ────────────────────────────────────────────────────
function QtySelector({ quantity, setQuantity }: { quantity: number; setQuantity: (n: number) => void }) {
  return (
    <div className="qty-selector" style={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
      <button
        id="qtyMinus"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        style={{ background: '#fff', border: 'none', width: '40px', height: '36px', fontSize: '18px', cursor: 'pointer' }}
      >
        −
      </button>
      <input
        id="qtyInput"
        type="text"
        value={quantity}
        readOnly
        style={{ width: '40px', height: '36px', border: 'none', borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}
      />
      <button
        id="qtyPlus"
        onClick={() => setQuantity(quantity + 1)}
        style={{ background: '#fff', border: 'none', width: '40px', height: '36px', fontSize: '18px', cursor: 'pointer' }}
      >
        +
      </button>
    </div>
  );
}

// ─── DESKTOP VIEW ─────────────────────────────────────────────────────────────
function DesktopProductView({ data, onOpenPinModal }: { data: ReturnType<typeof useProductData>, onOpenPinModal: () => void }) {
  const { product, selectedSizeIndex, setSelectedSizeIndex, quantity, setQuantity, currentPrice, oldPrice, currentSize } = data;
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('product');

  const relatedProducts = productsData
    .filter((p: any) => p.id !== product.id)
    .slice(0, 3)
    .map((p: any) => ({ ...p, displayPrice: `₹${p.sizes?.[1]?.price?.toLocaleString('en-IN') ?? p.price?.toLocaleString('en-IN')}` }));

  const tabs = [
    { key: 'product', label: 'Product Details' },
    { key: 'apply', label: 'How to Apply' },
    { key: 'specs', label: 'Specifications' },
    { key: 'reviews', label: `Reviews (${product.reviews})` },
    { key: 'faqs', label: 'FAQs' },
  ];

  return (
    <main
      id="mainContent"
      className="product-details-main"
      style={{ 
        width: '1900px', 
        maxWidth: 'none', // Force override any legacy CSS max-width
        padding: '20px 5%', 
        background: '#fff', 
        boxSizing: 'border-box' 
      }}
    >
      <style>{`
        /* Target 14-18 inch laptops specifically to override the 1900px inline width */
        @media (max-width: 1535px) {
          #mainContent.product-details-main {
            width: 100% !important;
          }
        }

        .responsive-top-grid {
          display: grid;
          gap: 56px;
          align-items: start;
          grid-template-columns: minmax(350px, 1fr) minmax(350px, 1.2fr);
        }
        .left-img-container {
          position: sticky;
          top: 90px;
        }
        .action-box-container {
          /* Drop down below Image and Details, spanning full width */
          grid-column: 1 / -1;
          width: 100%;
          position: relative;
        }
        .responsive-bottom-grid {
          display: flex;
          flex-direction: column;
          gap: 36px;
          margin-top: 56px;
          align-items: stretch;
        }
        @media (min-width: 1536px) {
          .responsive-top-grid {
            grid-template-columns: minmax(350px, 1.2fr) minmax(350px, 1.5fr) 350px;
          }
          .action-box-container {
            grid-column: auto;
            position: sticky;
            top: 90px;
          }
          .responsive-bottom-grid {
            display: grid;
            grid-template-columns: 1fr 350px;
            align-items: start;
          }
        }
      `}</style>
      {/* Back Button and Breadcrumbs */}
      <div style={{ marginBottom: '24px' }}>
        <Link to="/shop-paints.html" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#111', textDecoration: 'none', fontWeight: 600, fontSize: '15px', marginBottom: '16px', background: '#f5f5f5', padding: '8px 16px', borderRadius: '8px', transition: 'background 0.2s' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Shop
        </Link>
        <div style={{ fontSize: '13px', color: '#666', display: 'flex', gap: '6px', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link to="/shop-paints.html" style={{ color: '#666', textDecoration: 'none' }}>Shop Paints</Link>
          <span>›</span>
          <span style={{ color: '#737b2d', fontWeight: 500 }}>{product.subtitle || 'Interior Paints'}</span>
          <span>›</span>
          <span style={{ color: '#111', fontWeight: 600 }}>{product.title}</span>
        </div>
      </div>

      {/* ── Top Grid (Flawless organic CSS Grid scaling) ── */}
      <div className="responsive-top-grid">

        {/* Left – Image Container */}
        <div className="left-img-container">
          <div
            className="prod-carousel"
            style={{
              background: '#d8cabd',
              borderRadius: '16px',
              position: 'relative',
              padding: '40px 20px 30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '450px',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <div id="prodBadge" className="discount-badge-abs" style={{ position: 'absolute', top: '16px', left: '16px', background: '#e34c43', color: '#fff', fontSize: '12px', fontWeight: 600, padding: '6px 12px', borderRadius: '6px', zIndex: 5 }}>
              {product.discount}
            </div>
            
           
            
            {/* Nav arrows */}
            <button style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <img
              id="prodImage"
              src={product.image}
              alt={product.title}
              className="prod-img-main"
              style={{ maxWidth: '85%', height: '320px', objectFit: 'contain' }}
            />
          </div>
          
          {/* Thumbnail strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '12px' }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ border: i === 0 ? '2px solid #737b2d' : '1px solid #ddd', borderRadius: '8px', background: '#f5f5f5', padding: '6px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <img src={product.image} alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', background: '#333', padding: '6px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontWeight: 600, fontSize: '14px' }}>
              +2
            </div>
          </div>
        </div>

        {/* Middle – Details */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'inline-block', background: '#f4f6eb', color: '#737b2d', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>
              {product.subtitle || 'Interior Paint'}
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#111', fontWeight: 500, cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                Add to Wishlist
              </button>
              <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#111', fontWeight: 500, cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                Share
              </button>
            </div>
          </div>

          <h1 id="prodTitle" style={{ fontSize: '32px', fontWeight: 700, color: '#111', margin: '0 0 8px', lineHeight: 1.2 }}>{product.title}</h1>
          <p style={{ color: '#555', fontSize: '15px', marginBottom: '16px' }}>Premium interior emulsion for rich finish and long lasting beauty.</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div id="prodRating" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              {product.rating}
              <span id="prodReviewsText" style={{ color: '#555', fontWeight: 400 }}>({product.reviews} reviews)</span>
            </div>
            <span style={{ color: '#ddd' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#555' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              Trusted by 10K+ customers
            </div>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
            <div id="prodPrice" className="curr-price" style={{ fontSize: '32px', fontWeight: 800, color: '#111' }}>
              ₹{currentPrice.toLocaleString('en-IN')}
            </div>
            <div id="prodOldPrice" className="old-price" style={{ fontSize: '18px', color: '#888', textDecoration: 'line-through' }}>
              ₹{oldPrice?.toLocaleString('en-IN')}
            </div>
            <div id="prodDiscount" className="discount-pill" style={{ background: '#ffeaea', color: '#e34c43', fontSize: '12px', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>
              {product.discount}
            </div>
          </div>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>(Inclusive of all taxes)</div>

          {/* Delivery check */}
          <div className="delivery-check" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fafafa', padding: '16px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '32px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '14px', color: '#737b2d', fontWeight: 600, display: 'block', marginBottom: '2px' }}>Delivery available in your area</strong>
              <span style={{ fontSize: '13px', color: '#555' }}>Enter PIN code to check delivery date</span>
            </div>
            <button onClick={onOpenPinModal} style={{ background: '#fff', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
              Check PIN Code
            </button>
          </div>

          {/* Feature pills (Icon top, text bottom) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center' }}>
            {[
              { icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />, label: 'Rich & Smooth\nFinish' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, label: 'Long Lasting\nPerformance' },
              { icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />, label: 'Washable\nTechnology' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, label: 'Low Odour\n& Safe' } // Reusing shield icon for simplicity
            ].map((feat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">{feat.icon}</svg>
                </div>
                <span style={{ fontSize: '11px', color: '#555', fontWeight: 500, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{feat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Action Box */}
        <div className="action-box-container" style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <strong style={{ fontSize: '15px' }}>Choose Size</strong>
            <a href="#" className="size-guide" style={{ fontSize: '13px', color: '#737b2d', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="8" rx="2" /><path d="M7 8v8M11 8v4M15 8v8" /></svg>
              Size guide
            </a>
          </div>
          <SizeGrid sizes={product.sizes} selectedIdx={selectedSizeIndex} onSelect={setSelectedSizeIndex} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px', marginBottom: '24px' }}>
            <strong style={{ fontSize: '15px' }}>Quantity</strong>
            <QtySelector quantity={quantity} setQuantity={setQuantity} />
          </div>

          <button 
            className="btn-primary-large" 
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.title,
                size: currentSize?.label,
                price: currentPrice,
                quantity: quantity,
                image: product.image
              });
            }}
            style={{ width: '100%', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
            Add to Cart
          </button>
          <button className="btn-secondary-large" style={{ width: '100%', background: '#fdfaf3', color: '#111', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', marginBottom: '12px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            Buy Now
          </button>

          <div style={{ margin: '24px 0 12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1, height: '1px', background: '#eaeaea' }}></div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Buying in bulk?</span>
            <div style={{ flex: 1, height: '1px', background: '#eaeaea' }}></div>
          </div>

          <button style={{ width: '100%', background: '#737b2d', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Contact for Additional Discounts
          </button>

          <div style={{ marginTop: '20px', padding: '16px', background: '#fafafa', borderRadius: '8px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '13px', display: 'block', color: '#111' }}>100% Secure Payments</strong>
              <span style={{ fontSize: '12px', color: '#666' }}>Easy returns & replacements</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </div>
        </div>
      </div>

      {/* ── Bottom 2-col: Tabs + Also Consider ── */}
      <div className="responsive-bottom-grid">
        {/* Tabs */}
        <div>
          <div style={{ display: 'flex', gap: '0', borderBottom: '2px solid #eee', overflowX: 'auto' }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '16px 24px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeTab === t.key ? '#111' : '#666',
                  borderBottom: `3px solid ${activeTab === t.key ? '#737b2d' : 'transparent'}`,
                  marginBottom: '-2px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div id={`acc${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`} style={{ padding: '32px 0', lineHeight: 1.8, color: '#444', fontSize: '15px' }}>
            {activeTab === 'product' && (
              <div id="accDetails">
                <p style={{ marginBottom: '24px' }}>Royale Luxury Emulsion is a premium interior paint that gives your walls a rich matt finish with long lasting durability. It provides excellent washability, low odour and a smooth luxurious look to your home.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Luxurious rich matt finish
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Low odour, safe & non-toxic
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Excellent washability
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Stain resistant
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'apply' && (
              <div id="accApply">
                <p style={{ whiteSpace: 'pre-line' }}>{product.howToApply}</p>
              </div>
            )}
            {activeTab === 'specs' && (
              <div id="accSpecs">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.specifications?.map((s: any, i: number) => (
                    <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '16px' }}>
                      <strong style={{ width: '200px', color: '#111', flexShrink: 0 }}>{s.label}:</strong>
                      <span>{s.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'reviews' && (
              <p id="accReviews">
                <span id="accReviewsCount">({product.reviews})</span> customer reviews will be shown here.
              </p>
            )}
            {activeTab === 'faqs' && (
              <p id="accFaqs">
                Frequently asked questions will be displayed here.
              </p>
            )}
          </div>
        </div>

        {/* Also Consider */}
        <div style={{ background: '#fafafa', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: '#111' }}>Also Consider</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {relatedProducts.map((rp: any, i: number) => (
              <Link
                key={i}
                to={`/product-details.html?id=${rp.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '12px', background: '#fff', textDecoration: 'none' }}
              >
                <img src={rp.image} alt={rp.title} style={{ width: '60px', height: '60px', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>{rp.subtitle}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{rp.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#F0BC51' }}>
                    ★ <span style={{ color: '#555' }}>{rp.rating} ({rp.reviews})</span>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#111', marginTop: '6px' }}>{rp.displayPrice}</div>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '4px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737b2d' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Feature bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', marginTop: '60px', paddingTop: '30px', paddingBottom: '30px' }}>
        {[
          { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, title: 'Free Delivery', sub: 'On orders above ₹999' },
          { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>, title: 'Secure Payments', sub: '100% safe & secure' },
          { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, title: 'Helpful Support', sub: 'Chat with our experts' },
          { icon: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>, title: '10-Day Returns', sub: 'Easy returns & refunds' },
          { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, title: 'Trusted by 10K+', sub: 'Happy customers' }
        ].map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">{f.icon}</svg>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#111' }}>{f.title}</strong>
              <span style={{ fontSize: '12px', color: '#666' }}>{f.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// ─── MOBILE VIEW ──────────────────────────────────────────────────────────────
function MobileProductView({ data, navigate, onOpenPinModal }: { data: ReturnType<typeof useProductData>; navigate: any; onOpenPinModal: () => void }) {
  const { product, selectedSizeIndex, setSelectedSizeIndex, quantity, setQuantity, currentPrice, oldPrice, currentSize } = data;
  const { addToCart, cartCount } = useCart();

  return (
    <div id="mainContent" style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', minHeight: '100vh', borderLeft: '1px solid #eee', borderRight: '1px solid #eee' }}>
      {/* Header – exactly like backup: back btn on left, logo ABSOLUTELY centered, fav+cart on right */}
      <header
        className="header details-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          
        }}
      >
        <button
          className="icon-btn back-btn"
          onClick={() => navigate('/shop-paints.html')}
          style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', zIndex: 2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          className="logo"
          style={{
            position: 'absolute',
            left: '30%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="16" fill="#1A1A1A" />
              <rect x="14" y="12" width="4" height="16" rx="2" fill="#ffffff" />
              <rect x="22" y="12" width="4" height="16" rx="2" fill="#ffffff" />
            </svg>
          </div>
          <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span className="brand-name" style={{ color: '#111', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap' }}>Sri Ram <span className="brand-tag" style={{ color: '#555', fontSize: '9px', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>Enterprises</span></span>
            
          </div>
        </div>

        <div
          className="header-right-icons"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexShrink: 0, zIndex: 2 }}
        >
          <button
            className="icon-btn fav-btn"
            style={{ background: 'none', border: 'none', padding: '0px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '50px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <Link
            to="/cart.html"
            className="icon-btn cart-btn"
            style={{ background: 'none', border: 'none', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', textDecoration: 'none' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span
                className="cart-badge"
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  background: '#737b2d',
                  color: '#fff',
                  fontSize: '9px',
                  fontWeight: 700,
                  borderRadius: '50%',
                  width: '13px',
                  height: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Carousel */}
      <section className="prod-carousel" style={{ background: '#d8cabd', borderRadius: '0 0 16px 16px', position: 'relative', paddingTop: '40px', paddingBottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div id="prodBadge" className="discount-badge-abs" style={{ position: 'absolute', top: '16px', left: '16px', background: '#e34c43', color: '#fff', fontSize: '12px', fontWeight: 600, padding: '6px 12px', borderRadius: '6px', zIndex: 5 }}>
          {product.discount}
        </div>
        <button className="ar-btn" style={{ position: 'absolute', top: '16px', right: '16px', background: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 5 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </button>
        <img id="prodImage" src={product.image} alt={product.title} className="prod-img-main" style={{ maxWidth: '80%', height: 'auto', objectFit: 'contain', zIndex: 2 }} />
        <div className="carousel-dots" style={{ position: 'absolute', bottom: '12px', width: '100%', display: 'flex', justifyContent: 'center', gap: '6px', zIndex: 5 }}>
          <span className="dot active" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#737b2d' }} />
          <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
          <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
          <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
        </div>
      </section>

      {/* Info */}
      <section className="prod-info" style={{ padding: '24px 20px' }}>
        <h1 id="prodTitle" className="prod-title" style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#111' }}>{product.title}</h1>
        <p id="prodSubtitle" className="prod-subtitle" style={{ fontSize: '14px', color: '#555', margin: '0 0 16px' }}>{product.subtitle}</p>

        <div className="rating-share-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div className="prod-rating" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#F0BC51" stroke="#F0BC51" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <strong id="prodRatingScore">{product.rating}</strong>
            <span id="prodReviewsText" className="reviews-txt" style={{ color: '#555' }}>({product.reviews} reviews)</span>
          </div>
          <button className="share-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', fontSize: '14px', color: '#111', fontWeight: 500, cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </button>
        </div>

        <div className="price-row" style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <div id="prodPrice" className="curr-price" style={{ fontSize: '28px', fontWeight: 800, color: '#111' }}>
            ₹{currentPrice.toLocaleString('en-IN')}
          </div>
        </div>
        <div className="old-price-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px', marginBottom: '24px' }}>
          <div id="prodOldPrice" className="old-price" style={{ fontSize: '16px', color: '#888', textDecoration: 'line-through' }}>
            ₹{oldPrice?.toLocaleString('en-IN')}
          </div>
          <div id="prodDiscount" className="discount-pill" style={{ background: '#ffeaea', color: '#e34c43', fontSize: '12px', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>
            {product.discount}
          </div>
        </div>

        <div className="delivery-check" onClick={onOpenPinModal} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', cursor: 'pointer' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2">
            <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <div className="delivery-text" style={{ display: 'flex', flexDirection: 'column' }}>
            <strong style={{ fontSize: '13px', color: '#737b2d', fontWeight: 600 }}>Delivery available in your area</strong>
            <span style={{ fontSize: '12px', color: '#555', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
              Enter PIN code to check delivery date
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </span>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="prod-sizes" style={{ padding: '0 20px 24px' }}>
        <div className="size-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <strong style={{ fontSize: '16px' }}>Choose Size</strong>
          <a href="#" className="size-guide" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#737b2d', textDecoration: 'none', fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="8" rx="2" /><path d="M7 8v8M11 8v4M15 8v8" /></svg>
            Size guide
          </a>
        </div>
        <SizeGrid sizes={product.sizes} selectedIdx={selectedSizeIndex} onSelect={setSelectedSizeIndex} />
      </section>

      {/* Qty */}
      <section className="prod-qty" style={{ padding: '0 20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: '15px' }}>Quantity</strong>
        <QtySelector quantity={quantity} setQuantity={setQuantity} />
      </section>

      {/* Actions */}
      <section className="prod-actions-main" style={{ padding: '0 20px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button 
          className="btn-primary-large" 
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.title,
              size: currentSize?.label,
              price: currentPrice,
              quantity: quantity,
              image: product.image
            });
          }}
          style={{ width: '100%', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          Add to Cart
        </button>
        <button className="btn-secondary-large" style={{ width: '100%', background: '#fdfaf3', color: '#111', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          Buy Now
        </button>

        <div style={{ margin: '12px 0 0px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1, height: '1px', background: '#eaeaea' }}></div>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Buying in bulk?</span>
          <div style={{ flex: 1, height: '1px', background: '#eaeaea' }}></div>
        </div>

        <button style={{ width: '100%', background: '#737b2d', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Contact for Additional Discounts
        </button>
      </section>

      {/* Accordions */}
      <section className="prod-accordions" style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Accordion title="Product Details" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>}>
          <div id="accDetails"><p>{product.details}</p></div>
        </Accordion>
        <Accordion title="How to Apply" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}>
          <div id="accApply"><p style={{ whiteSpace: 'pre-line' }}>{product.howToApply}</p></div>
        </Accordion>
        <Accordion title="Specifications" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /></svg>}>
          <div id="accSpecs">
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {product.specifications?.map((s: any, i: number) => (
                <li key={i} style={{ padding: '8px 0', borderBottom: '1px dotted #e0e0e0' }}>
                  <strong>{s.label}:</strong> {s.value}
                </li>
              ))}
            </ul>
          </div>
        </Accordion>
        <Accordion title={<>Reviews <span id="accReviewsCount" style={{ marginLeft: '4px' }}>({product.reviews})</span></>} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>}>
          <p>No reviews yet.</p>
        </Accordion>
      </section>

      <div style={{ height: '100px' }} />

      {/* Sticky Bottom Bar */}
      <div id="stickyBar" className="sticky-bottom-bar" style={{ display: 'flex', position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '480px', background: '#fff', borderTop: '1px solid #f0f0f0', padding: '12px 20px', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, boxShadow: '0 -4px 12px rgba(0,0,0,0.05)' }}>
        <div className="sticky-info" style={{ display: 'flex', flexDirection: 'column' }}>
          <strong id="stickyPrice" style={{ fontSize: '20px', color: '#111' }}>
            ₹{(currentPrice * quantity).toLocaleString('en-IN')}
          </strong>
          <span id="stickyTitle" style={{ fontSize: '12px', color: '#555' }}>
            {product.title} ({currentSize?.size ?? ''})
          </span>
        </div>
        <button className="btn-primary-small" style={{ background: '#737b2d', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
