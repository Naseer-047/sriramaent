import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Try to get data from local storage if available, otherwise use mock
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '+91 98765 43210');
  const [name, setName] = useState(localStorage.getItem('name') || 'Guest User');
  const [email, setEmail] = useState('guestuser@gmail.com');
  const [address, setAddress] = useState({
    title: 'Home',
    street: '123, 4th Main Road, Jayanagar 4th Block',
    city: 'Bengaluru',
    state: 'Karnataka',
    pin: '560011',
    country: 'India',
    phone: '+91 98765 43210'
  });

  // Modal states
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  // Edit forms state
  const [editName, setEditName] = useState(name);
  const [editPhone, setEditPhone] = useState(phone);
  const [editEmail, setEditEmail] = useState(email);
  const [editAddress, setEditAddress] = useState(address);

  // Background color reset
  useEffect(() => {
    document.body.style.backgroundColor = '#fafafa';
    return () => { document.body.style.backgroundColor = ''; };
  }, []);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setName(editName);
    setPhone(editPhone);
    setEmail(editEmail);
    localStorage.setItem('name', editName);
    localStorage.setItem('phone', editPhone);
    setIsEditProfileOpen(false);
  };

  const handleAddressSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAddress(editAddress);
    setIsAddressModalOpen(false);
  };

  const mockOrders = [
    {
      id: 'ORD-12345-ABC',
      date: 'Aug 14, 2026',
      itemsCount: '2 Items',
      status: 'Delivered',
      total: '₹4,500',
      image: 'https://via.placeholder.com/60/cc3333/ffffff?text=Paint'
    },
    {
      id: 'ORD-98765-XYZ',
      date: 'Jul 02, 2026',
      itemsCount: '1 Item',
      status: 'Processing',
      total: '₹1,250',
      image: 'https://via.placeholder.com/60/663399/ffffff?text=Paint'
    }
  ];

  if (isMobile) {
    return (
      <div style={{ minHeight: '100vh', padding: '80px 16px 100px', fontFamily: '"Inter", sans-serif', background: '#fafafa' }}>
        
        {/* Mobile Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', background: '#737b2d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111', marginBottom: '4px' }}>{name}</div>
              <div style={{ fontSize: '13px', color: '#666' }}>{email}</div>
            </div>
          </div>
          <button onClick={() => setIsEditProfileOpen(true)} style={{ background: '#fff', border: '1px solid #737b2d', color: '#737b2d', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
            Edit
          </button>
        </div>

        {/* Free Delivery Banner */}
        <div style={{ background: '#f5f7eb', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '40px', background: '#e2e8ce', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a501a', flexShrink: 0 }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>You are ₹1,215 away from FREE delivery!</div>
            <div style={{ fontSize: '11px', color: '#555', marginBottom: '12px' }}>Add more items to get free delivery on your order.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ flex: 1, height: '6px', background: '#e0e0e0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '40%', height: '100%', background: '#737b2d' }}></div>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#555' }}>₹785 / ₹2,000</div>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 16px', border: '1px solid #eee', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', margin: '0 0 16px' }}>Quick Access</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowX: 'auto', paddingBottom: '8px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '60px' }}>
              <div style={{ width: '48px', height: '48px', background: '#f9f9f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737b2d' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>Orders</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '60px' }}>
              <div style={{ width: '48px', height: '48px', background: '#f9f9f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737b2d' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>Addresses</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '60px' }}>
              <div style={{ width: '48px', height: '48px', background: '#f9f9f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737b2d' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>Wishlist</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '60px' }}>
              <div style={{ width: '48px', height: '48px', background: '#f9f9f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737b2d' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>Settings</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '60px' }}>
              <div style={{ width: '48px', height: '48px', background: '#f9f9f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737b2d' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>Support</span>
            </div>
            
          </div>
        </div>

        {/* Recent Orders */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 16px', border: '1px solid #eee', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', margin: 0 }}>Recent Orders</h3>
            <button style={{ background: 'none', border: 'none', color: '#737b2d', fontSize: '12px', fontWeight: 600 }}>View All Orders &rarr;</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {mockOrders.map((order, idx) => (
              <div key={idx} style={{ border: '1px solid #eee', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <img src={order.image} alt="Product" style={{ width: '56px', height: '56px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>Order {order.id}</div>
                      <span style={{ 
                        padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, 
                        background: order.status === 'Delivered' ? '#e6f4ea' : '#fef7e0',
                        color: order.status === 'Delivered' ? '#137333' : '#b06000',
                      }}>
                        {order.status}
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>{order.date} <span style={{ color: '#ccc' }}>&bull;</span> <span style={{ color: '#666', fontWeight: 400 }}>{order.itemsCount}</span></div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#111' }}>{order.total}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, background: '#f9f9f9', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#111' }}>View Details</button>
                  <button style={{ flex: 1, background: '#fff', border: '1px solid #737b2d', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#737b2d', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Address */}
        <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '20px 16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', margin: 0 }}>Saved Address</h3>
            <button style={{ background: 'none', border: 'none', color: '#737b2d', fontSize: '12px', fontWeight: 600 }}>Manage Addresses &rarr;</button>
          </div>
          
          <div style={{ background: '#f5f7eb', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8ce', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ background: '#737b2d', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <span style={{ fontWeight: 700, color: '#111', fontSize: '14px' }}>{address.title}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: '#e2e8ce', color: '#4a501a', fontSize: '10px', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>Default</span>
                <button onClick={() => setIsAddressModalOpen(true)} style={{ background: 'none', border: 'none', color: '#555', padding: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
              </div>
            </div>
            <div style={{ color: '#555', fontSize: '13px', lineHeight: 1.5, paddingLeft: '32px' }}>
              {address.street},<br/>
              {address.city}, {address.state} - {address.pin}<br/>
              {address.country}
              <div style={{ marginTop: '8px', color: '#555' }}>{address.phone}</div>
            </div>
          </div>

          <button onClick={() => setIsAddressModalOpen(true)} style={{ width: '100%', marginTop: '16px', background: '#fff', border: '1px dashed #ccc', color: '#737b2d', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add New Address
          </button>
        </div>

        {/* Bottom Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#737b2d' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#111' }}>Free Delivery</div>
              <div style={{ fontSize: '10px', color: '#666' }}>On orders above ₹2,000</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#737b2d' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#111' }}>Easy Returns</div>
              <div style={{ fontSize: '10px', color: '#666' }}>7 days return policy</div>
            </div>
          </div>
        </div>

        {/* Modals are rendered below */}
        {isEditProfileOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ background: '#fff', width: '90%', maxWidth: '400px', borderRadius: '16px', padding: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Edit Profile</h2>
                <button onClick={() => setIsEditProfileOpen(false)} style={{ background: 'none', border: 'none' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
              </div>
              <form onSubmit={handleProfileSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Full Name</label>
                  <input type="text" placeholder="Enter full name" value={editName} onChange={e => setEditName(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Phone Number</label>
                  <input type="text" placeholder="Enter phone number" value={editPhone} onChange={e => setEditPhone(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Email Address</label>
                  <input type="email" placeholder="Enter email address" value={editEmail} onChange={e => setEditEmail(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" style={{ background: '#737b2d', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, marginTop: '8px' }}>Save Changes</button>
              </form>
            </div>
          </div>
        )}

        {isAddressModalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ background: '#fff', width: '90%', maxWidth: '440px', borderRadius: '16px', padding: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Address Details</h2>
                <button onClick={() => setIsAddressModalOpen(false)} style={{ background: 'none', border: 'none' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
              </div>
              <form onSubmit={handleAddressSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Address Title (e.g. Home, Office)</label>
                  <input type="text" placeholder="Home, Office, etc." value={editAddress.title} onChange={e => setEditAddress({...editAddress, title: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Street Address</label>
                  <input type="text" placeholder="123 Main St, Apartment 4B" value={editAddress.street} onChange={e => setEditAddress({...editAddress, street: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>City</label>
                    <input type="text" placeholder="Bengaluru" value={editAddress.city} onChange={e => setEditAddress({...editAddress, city: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>State</label>
                    <input type="text" placeholder="Karnataka" value={editAddress.state} onChange={e => setEditAddress({...editAddress, state: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>PIN Code</label>
                    <input type="text" placeholder="560011" value={editAddress.pin} onChange={e => setEditAddress({...editAddress, pin: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Country</label>
                    <input type="text" placeholder="India" value={editAddress.country} onChange={e => setEditAddress({...editAddress, country: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <button type="submit" style={{ background: '#737b2d', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, marginTop: '8px' }}>Save Address</button>
              </form>
            </div>
          </div>
        )}

      </div>
    );
  }

  // ============================================
  // DESKTOP RENDER BELOW
  // ============================================
  return (
    <div style={{ minHeight: '100vh', padding: '100px 20px 60px', fontFamily: '"Inter", sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '32px' }}>
        
        {/* --- LEFT SIDEBAR --- */}
        <div style={{ width: '280px', flexShrink: 0 }}>
          
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '24px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '56px', height: '56px', background: '#737b2d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#111' }}>{name}</div>
                <div style={{ fontSize: '13px', color: '#666' }}>{email}</div>
              </div>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#f5f7eb', color: '#737b2d', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Overview
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: '#555', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Personal Details
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: '#555', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Addresses
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: '#555', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                My Orders
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: '#555', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Wishlist
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: '#555', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                Account Settings
              </a>
              <Link to="/" onClick={() => { localStorage.removeItem('isLoggedIn'); window.dispatchEvent(new Event('auth-change')); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', color: '#d32f2f', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', marginTop: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Logout
              </Link>
            </nav>
          </div>

          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', margin: '0 0 8px' }}>Need Help?</h3>
            <p style={{ fontSize: '13px', color: '#666', margin: '0 0 16px', lineHeight: 1.5 }}>We're here to help you with your orders and account.</p>
            <button style={{ width: '100%', background: '#fff', border: '1px solid #737b2d', color: '#737b2d', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Contact Support
            </button>
          </div>

        </div>

        {/* --- MAIN CONTENT --- */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#111', margin: 0 }}>My Profile</h1>
            <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0' }}>Manage your account details, addresses and view your order history.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'start' }}>
            
            {/* Left Col in Main */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Personal Details */}
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#111', margin: 0 }}>Personal Details</h2>
                  <button onClick={() => setIsEditProfileOpen(true)} style={{ background: '#fff', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#111', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                    Edit
                  </button>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: '#737b2d', background: '#f5f7eb', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>Full Name</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>{name}</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: '#737b2d', background: '#f5f7eb', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>Phone Number</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>{phone}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: '#737b2d', background: '#f5f7eb', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>Email Address</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>{email}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: '#737b2d', background: '#f5f7eb', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>Member Since</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>Aug 10, 2026</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Saved Addresses */}
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#111', margin: 0 }}>Saved Addresses</h2>
                  <button style={{ background: 'none', border: 'none', color: '#737b2d', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Manage Addresses</button>
                </div>
                
                <div style={{ background: '#f5f7eb', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8ce', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ background: '#737b2d', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      </div>
                      <span style={{ fontWeight: 700, color: '#111', fontSize: '14px' }}>{address.title}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ background: '#e2e8ce', color: '#4a501a', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '4px' }}>Default</span>
                      <button onClick={() => setIsAddressModalOpen(true)} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', padding: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                      </button>
                    </div>
                  </div>
                  <div style={{ color: '#555', fontSize: '13px', lineHeight: 1.6, paddingLeft: '32px' }}>
                    {address.street},<br/>
                    {address.city}, {address.state} - {address.pin}<br/>
                    {address.country}
                    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px', color: '#555' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      {address.phone}
                    </div>
                  </div>
                </div>

                <button onClick={() => setIsAddressModalOpen(true)} style={{ width: '100%', marginTop: '16px', background: '#fff', border: '1px dashed #ccc', color: '#737b2d', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Add New Address
                </button>
              </div>

            </div>

            {/* Right Col in Main */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Recent Orders */}
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#111', margin: 0 }}>Recent Orders</h2>
                  <button style={{ background: 'none', border: 'none', color: '#737b2d', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>View All Orders &rarr;</button>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {mockOrders.map((order, idx) => (
                    <div key={idx} style={{ border: '1px solid #eee', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                        <img src={order.image} alt="Product" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Order {order.id}</div>
                              <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>{order.date} &bull; <span style={{ color: '#666', fontWeight: 400 }}>{order.itemsCount}</span></div>
                            </div>
                            <span style={{ 
                              display: 'inline-block', 
                              padding: '4px 8px', 
                              borderRadius: '4px', 
                              fontSize: '11px', 
                              fontWeight: 700, 
                              background: order.status === 'Delivered' ? '#e6f4ea' : '#fef7e0',
                              color: order.status === 'Delivered' ? '#137333' : '#b06000',
                            }}>
                              {order.status}
                            </span>
                          </div>
                          <div style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginTop: '8px' }}>{order.total}</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ flex: 1, background: '#f9f9f9', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#111', cursor: 'pointer' }}>View Details</button>
                        <button style={{ flex: 1, background: '#fff', border: '1px solid #737b2d', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#737b2d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                          Track Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free Delivery Banner */}
              <div style={{ background: '#f5f7eb', borderRadius: '12px', border: '1px solid #e2e8ce', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', margin: '0 0 4px' }}>Free Delivery on Orders above ₹2,000</h3>
                  <p style={{ fontSize: '12px', color: '#555', margin: '0 0 16px' }}>Shop more and get free delivery at your doorstep.</p>
                  <Link to="/shop-paints.html" style={{ display: 'inline-block', background: '#737b2d', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>
                    Continue Shopping &rarr;
                  </Link>
                </div>
                {/* Simulated Truck Icon */}
                <div style={{ color: '#737b2d', opacity: 0.8 }}>
                   <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Badges */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #eee', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#737b2d' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>Secure Payments</div>
                <div style={{ fontSize: '11px', color: '#666' }}>100% secure and trusted</div>
              </div>
            </div>
            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#737b2d' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>Easy Returns</div>
                <div style={{ fontSize: '11px', color: '#666' }}>7 days return policy</div>
              </div>
            </div>
            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#737b2d' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>Genuine Products</div>
                <div style={{ fontSize: '11px', color: '#666' }}>Original & quality assured</div>
              </div>
            </div>
            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: '#737b2d' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>Customer Support</div>
                <div style={{ fontSize: '11px', color: '#666' }}>We're here to help</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- EDIT PROFILE MODAL --- */}
      {isEditProfileOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: '400px', borderRadius: '16px', padding: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Edit Profile</h2>
              <button onClick={() => setIsEditProfileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            </div>
            <form onSubmit={handleProfileSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Full Name</label>
                <input type="text" placeholder="Enter full name" value={editName} onChange={e => setEditName(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Phone Number</label>
                <input type="text" placeholder="Enter phone number" value={editPhone} onChange={e => setEditPhone(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Email Address</label>
                <input type="email" placeholder="Enter email address" value={editEmail} onChange={e => setEditEmail(e.target.value)} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ background: '#737b2d', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', marginTop: '8px' }}>Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {/* --- ADD/EDIT ADDRESS MODAL --- */}
      {isAddressModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: '440px', borderRadius: '16px', padding: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Address Details</h2>
              <button onClick={() => setIsAddressModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            </div>
            <form onSubmit={handleAddressSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Address Title (e.g. Home, Office)</label>
                <input type="text" placeholder="Home, Office, etc." value={editAddress.title} onChange={e => setEditAddress({...editAddress, title: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Street Address</label>
                <input type="text" placeholder="123 Main St, Apartment 4B" value={editAddress.street} onChange={e => setEditAddress({...editAddress, street: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>City</label>
                  <input type="text" placeholder="Bengaluru" value={editAddress.city} onChange={e => setEditAddress({...editAddress, city: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>State</label>
                  <input type="text" placeholder="Karnataka" value={editAddress.state} onChange={e => setEditAddress({...editAddress, state: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>PIN Code</label>
                  <input type="text" placeholder="560011" value={editAddress.pin} onChange={e => setEditAddress({...editAddress, pin: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#555', marginBottom: '6px' }}>Country</label>
                  <input type="text" placeholder="India" value={editAddress.country} onChange={e => setEditAddress({...editAddress, country: e.target.value})} required style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
              <button type="submit" style={{ background: '#737b2d', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', marginTop: '8px' }}>Save Address</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
