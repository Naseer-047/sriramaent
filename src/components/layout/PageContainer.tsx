import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function useMediaQuery(query: string) {
  // Read initial value synchronously to prevent flash
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export default function PageContainer() {
  const location = useLocation();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // On mobile, product details page has its own custom header — hide global Navbar
  const isProductPage = location.pathname === '/product-details.html';
  const hideNavbar = !isDesktop && isProductPage;

  return (
    <div className="app-container">
      {!hideNavbar && <Navbar />}
      <main style={{ width: '100%', margin: 0, padding: 0 }}>
        <Outlet />
      </main>
      {/* Hide Footer on mobile product page to avoid stacking with sticky bar */}
      {!(isProductPage && !isDesktop) && <Footer />}
    </div>
  );
}
