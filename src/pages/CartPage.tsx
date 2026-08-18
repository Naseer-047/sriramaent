// @ts-ignore
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/store/CartContext';
import productsData from '@/data/product-data';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount, addToCart } = useCart();

  useEffect(() => {
    document.body.classList.add('cart-page');
    document.body.style.backgroundColor = '#fafafa';
    return () => {
      document.body.classList.remove('cart-page');
      document.body.style.backgroundColor = '';
    };
  }, []);

  const FREE_DELIVERY_THRESHOLD = 2000;
  const deliveryCharges = cartTotal > 0 && cartTotal < FREE_DELIVERY_THRESHOLD ? 75 : 0;
  const discount = Math.floor(cartTotal * 0.05); // 5% fake discount for UI accuracy
  const finalTotal = cartTotal - discount + deliveryCharges;
  
  const awayFromFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / FREE_DELIVERY_THRESHOLD) * 100);

  // Grab some products for "You may also like"
  const suggestedProducts = productsData.slice(0, 4);

  return (
    <div className="page-container" style={{ minHeight: '100vh', padding: '100px 20px 60px', fontFamily: '"Inter", sans-serif' }}>
      <style>{`
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
          align-items: start;
        }
        .cart-item-header {
          display: grid;
          grid-template-columns: 3fr 1fr 1.2fr 1fr 40px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #eee;
          font-size: 12px;
          font-weight: 700;
          color: #111;
        }
        .cart-item-row {
          display: grid;
          grid-template-columns: 3fr 1fr 1.2fr 1fr 40px;
          gap: 16px;
          padding: 24px;
          border-bottom: 1px solid #eee;
          align-items: center;
          position: relative;
        }
        .mobile-only-price {
          display: none;
        }
        .cart-actions {
          padding: 20px 24px;
          border-top: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
        }
        
        @media (max-width: 992px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .page-container {
            padding: 80px 16px 40px !important;
          }
          .cart-item-header {
            display: none;
          }
          .cart-item-row {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
          }
          .cart-item-product {
            width: 100%;
            display: flex;
            gap: 12px;
          }
          .cart-item-price-col {
            display: none;
          }
          .mobile-only-price {
            display: block;
            margin-top: 8px;
          }
          .cart-item-qty-col {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
          }
          .cart-item-total-col {
            display: none;
          }
          .desktop-remove {
            position: absolute;
            top: 16px;
            right: 16px;
            border: none !important;
            width: 24px !important;
            height: 24px !important;
            padding: 0 !important;
            background: transparent !important;
          }
          .cart-actions {
            flex-direction: column;
            gap: 12px;
            padding: 16px;
          }
          .cart-actions a, .cart-actions button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title & Breadcrumb */}
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111', margin: '0 0 8px' }}>Your Cart</h1>
        <div style={{ fontSize: '13px', color: '#666', display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span style={{ color: '#5e6822', fontWeight: 600 }}>Cart</span>
        </div>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', borderRadius: '16px', border: '1px solid #eee', marginTop: '24px' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" style={{ margin: '0 auto 16px' }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>Your cart is empty</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>Looks like you haven't added anything yet.</p>
            <Link to="/shop-paints.html" style={{ display: 'inline-block', background: '#111', color: '#fff', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600 }}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Free Delivery Banner */}
            <div style={{ background: '#f6faee', border: '1px solid #e2ebd0', borderRadius: '12px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #e2ebd0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e6822" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <strong style={{ fontSize: '14px', color: '#111', display: 'block', marginBottom: '4px' }}>
                  {awayFromFreeDelivery > 0 ? `You are ₹${awayFromFreeDelivery.toLocaleString('en-IN')} away from FREE delivery!` : 'You have unlocked FREE delivery!'}
                </strong>
                <span style={{ fontSize: '13px', color: '#555' }}>
                  {awayFromFreeDelivery > 0 ? 'Add more items to get free delivery on your order.' : 'Your order is eligible for free shipping.'}
                </span>
              </div>
              <div style={{ width: '100%', maxWidth: '200px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flex: 1, height: '6px', background: '#e2ebd0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${progressPercent}%`, height: '100%', background: '#5e6822', borderRadius: '3px' }}></div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#555', whiteSpace: 'nowrap' }}>
                  ₹{cartTotal.toLocaleString('en-IN')} / ₹{FREE_DELIVERY_THRESHOLD.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Main Cart Grid */}
            <div className="cart-layout">
              
              {/* Left Column: Items */}
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid #eee' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>{cartCount} Items in your cart</h2>
                </div>
                
                <div className="cart-item-header">
                  <div>Product</div>
                  <div style={{ textAlign: 'center' }}>Price</div>
                  <div style={{ textAlign: 'center' }}>Quantity</div>
                  <div style={{ textAlign: 'right' }}>Total</div>
                  <div></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {cart.map((item, idx) => (
                    <div key={`${item.id}-${item.size}-${idx}`} className="cart-item-row" style={{ borderBottom: idx < cart.length - 1 ? '1px solid #eee' : 'none' }}>
                      
                      {/* Product */}
                      <div className="cart-item-product">
                        <div style={{ width: '70px', height: '70px', background: '#f9f9f9', borderRadius: '8px', padding: '4px', border: '1px solid #eee', flexShrink: 0 }}>
                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                          <h3 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 700, color: '#111', lineHeight: 1.3, paddingRight: '20px' }}>{item.name}</h3>
                          <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#666' }}>{item.size ? 'Premium Interior Paint' : 'Accessories'}</p>
                          {item.size && (
                            <span style={{ display: 'inline-block', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '2px 6px', fontSize: '11px', fontWeight: 600, color: '#555' }}>
                              {item.size}
                            </span>
                          )}
                          <div className="mobile-only-price">
                            <span style={{ fontSize: '14px', fontWeight: 800, color: '#111' }}>₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="cart-item-price-col" style={{ textAlign: 'center', fontSize: '14px', fontWeight: 800, color: '#111' }}>
                        ₹{item.price.toLocaleString('en-IN')}
                      </div>

                      {/* Quantity */}
                      <div className="cart-item-qty-col">
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden', height: '32px' }}>
                          <button onClick={() => updateQuantity(item.id, item.size, -1)} style={{ width: '32px', height: '100%', background: '#fff', border: 'none', borderRight: '1px solid #ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#555' }}>-</button>
                          <span style={{ width: '40px', textAlign: 'center', fontSize: '13px', fontWeight: 600 }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, 1)} style={{ width: '32px', height: '100%', background: '#fff', border: 'none', borderLeft: '1px solid #ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#555' }}>+</button>
                        </div>
                        <div className="mobile-only-price" style={{ margin: 0 }}>
                           <div style={{ fontSize: '14px', fontWeight: 800, color: '#111', textAlign: 'right' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="cart-item-total-col" style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#111', marginBottom: '4px' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                        <div style={{ fontSize: '11px', color: '#5e6822', fontWeight: 600 }}>In Stock</div>
                      </div>

                      {/* Remove */}
                      <div className="desktop-remove" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button onClick={() => removeFromCart(item.id, item.size)} style={{ background: '#fff', border: '1px solid #eee', width: '32px', height: '32px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#666', transition: 'all 0.2s' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>

                <div className="cart-actions">
                  <Link to="/shop-paints.html" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#111', textDecoration: 'none', background: '#fff', border: '1px solid #ddd', padding: '8px 16px', borderRadius: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Continue Shopping
                  </Link>
                  <button onClick={clearCart} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#e34c43', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 16px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Right Column: Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 20px', color: '#111' }}>Order Summary</h3>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: '#444' }}>
                    <span>Subtotal ({cartCount} items)</span>
                    <span style={{ fontWeight: 700, color: '#111' }}>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: '#444' }}>
                      <span>Discount</span>
                      <span style={{ fontWeight: 700, color: '#5e6822' }}>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '13px', color: '#444' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Delivery Charges
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    </span>
                    <span style={{ fontWeight: 700, color: '#111' }}>{deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges}`}</span>
                  </div>
                  
                  <div style={{ height: '1px', background: '#eee', marginBottom: '20px' }}></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#111' }}>Total <span style={{ fontSize: '11px', fontWeight: 500, color: '#666', display: 'block', marginTop: '2px' }}>(incl. of all taxes)</span></span>
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#111' }}>₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>

                  <button style={{ width: '100%', background: '#5e6822', color: '#fff', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Proceed to Checkout
                  </button>

                  <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e6f0e6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5e6822', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '12px', color: '#111' }}>Secure Checkout</strong>
                        <span style={{ fontSize: '11px', color: '#666' }}>100% secure payments</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '12px', color: '#111' }}>Easy Returns</strong>
                        <span style={{ fontSize: '11px', color: '#666' }}>7 days easy return policy</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '12px', color: '#111' }}>Support</strong>
                        <span style={{ fontSize: '11px', color: '#666' }}>We are here to help you</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#f6faee', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#111', fontWeight: 600 }}>Delivery to: <span style={{ color: '#5e6822' }}>Your Location</span></span>
                    <button style={{ background: 'none', border: 'none', color: '#5e6822', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Change</button>
                  </div>
                  <span style={{ fontSize: '12px', color: '#555' }}>Estimated delivery: 2-4 working days</span>
                </div>
              </div>

            </div>

            {/* You may also like */}
            <div style={{ marginTop: '20px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: '20px' }}>You may also like</h2>
              <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px' }}>
                {suggestedProducts.map((prod, idx) => (
                  <div key={idx} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '16px', minWidth: '280px', display: 'flex', gap: '16px', alignItems: 'center', position: 'relative' }}>
                    <button style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                    <div style={{ width: '80px', height: '80px', background: '#f9f9f9', borderRadius: '8px', padding: '8px', flexShrink: 0, border: '1px solid #eee' }}>
                      <img src={prod.image} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 700, color: '#111', lineHeight: 1.2 }}>{prod.title}</h4>
                      <p style={{ margin: '0 0 12px', fontSize: '10px', color: '#666' }}>Interior Paint</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#111' }}>₹{prod.price.toLocaleString('en-IN')}</span>
                        <button 
                          onClick={() => addToCart({ id: prod.id, name: prod.title, price: prod.price, quantity: 1, image: prod.image, size: prod.sizes?.[0]?.size })}
                          style={{ background: '#fff', border: '1px solid #ddd', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: '#5e6822', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '60px' }}>
                  <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
