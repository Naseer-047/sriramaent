import { createBrowserRouter } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ColoursPage from '@/pages/ColoursPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import AuthPage from '@/pages/AuthPage';
import ProfilePage from '@/pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shop-paints.html',
        element: <ShopPage />,
      },
      {
        path: 'explore-colours.html',
        element: <ColoursPage />,
      },
      {
        path: 'product-details.html',
        element: <ProductPage />,
      },
      {
        path: 'cart.html',
        element: <CartPage />,
      },
      {
        path: 'login.html',
        element: <AuthPage />,
      },
      {
        path: 'profile.html',
        element: <ProfilePage />,
      }
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

export default router;
