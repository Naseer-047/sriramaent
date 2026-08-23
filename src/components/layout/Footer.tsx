
import { Link } from 'react-router-dom';

export default function Footer() {
  
  return (
    <>
<footer className="site-footer">
        <div className="footer-container">
            {/*  Footer Top  */}
            <div className="footer-top">
                <div className="footer-line"></div>
                <div className="footer-top-text">
                    <i>Colour your world. One shade at a time.</i>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#686e35" strokeWidth="2"><path d="M11 16H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3" /><circle cx="12" cy="16" r="1" /><path d="M12 17v5" /><path d="M10 22h4" /></svg>
                </div>
                <div className="footer-line"></div>
            </div>

            {/*  Footer Main Grid  */}
            <div className="footer-main">
                
                {/*  Col 1: Brand  */}
                <div className="footer-col footer-col-brand">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/336/275/non_2x/ap-logo-ap-letter-ap-letter-logo-design-initials-ap-logo-linked-with-circle-and-uppercase-monogram-logo-ap-typography-for-technology-business-and-real-estate-brand-vector.jpg" alt="Asian Paints Logo" className="footer-logo" />
                    <h3 className="footer-brand-title">Your Local Paint Partner.</h3>
                    <p className="footer-brand-desc">Quality paints and trusted<br />Asian Paints products for<br />homes and spaces around you.</p>
                    <div className="footer-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#686e35" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10"></polyline></svg>
                        An Asian Paints Colourworld Store
                    </div>
                </div>

                {/*  Col 2: Shop  */}
                <div className="footer-col footer-col-links">
                    <h4 className="footer-heading">SHOP</h4>
                    <ul className="footer-links">
                        <li><Link to="#">Interior Paints</Link></li>
                        <li><Link to="#">Exterior Paints</Link></li>
                        <li><Link to="#">Waterproofing</Link></li>
                        <li><Link to="#">Painting Essentials</Link></li>
                        <li><Link to="#">All Products</Link></li>
                    </ul>
                </div>

                {/*  Col 3: Help  */}
                <div className="footer-col footer-col-links">
                    <h4 className="footer-heading">HELP</h4>
                    <ul className="footer-links">
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="#">Order Tracking</Link></li>
                        <li><Link to="#">Shipping & Delivery</Link></li>
                        <li><Link to="#">Returns & Refunds</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                    </ul>
                </div>

                {/*  Col 4: Visit Our Store  */}
                <div className="footer-col footer-col-store">
                    <h4 className="footer-heading store-heading">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#686e35"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="#fff" /></svg>
                        VISIT OUR STORE
                    </h4>
                    
                    <div className="store-info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        <p>123, 1st Main Road, HSR Layout,<br />Sector 2, Bengaluru – 560102,<br />Karnataka, India</p>
                    </div>

                    <div className="store-info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <p>Mon – Sun : 9:30 AM – 8:30 PM</p>
                    </div>

                    <div className="store-info-row">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <p className="store-phone">+91 98765 43210</p>
                    </div>

                    <div className="store-actions">
                        <Link to="#" className="btn-footer-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                            <span data-i18n="partner.directions">Get Directions</span>
                        </Link>
                        <Link to="#" className="btn-footer-outline">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span data-i18n="partner.call">Call Store</span>
                        </Link>
                    </div>
                </div>

            </div>

            {/*  Footer Bottom  */}
            <div className="footer-bottom">
                <div className="footer-bottom-line"></div>
                <div className="footer-bottom-content">
                    <p className="footer-copyright">© 2026 Your Store Name. All rights reserved.</p>
                    <div className="footer-policy-links">
                        <Link to="#">Privacy Policy</Link>
                        <span className="sep">|</span>
                        <Link to="#">Terms & Conditions</Link>
                        <span className="sep">|</span>
                        <Link to="#">Shipping Policy</Link>
                        <span className="sep">|</span>
                        <Link to="/admin.html" style={{ color: '#E2B659' }}>Admin Login</Link>
                    </div>
                </div>
                
                <div className="footer-social-row">
                    <div className="footer-socials">
                        <Link to="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                        <Link to="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link>
                        <Link to="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg></Link>
                    </div>
                    <Link to="#" className="btn-back-to-top">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}
