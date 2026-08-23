import { createBrowserRouter } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ColoursPage from '@/pages/ColoursPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import AuthPage from '@/pages/AuthPage';
import ProfilePage from '@/pages/ProfilePage';
import AdminPage from '@/pages/AdminPage';

import AdminShell from '@/features/admin/components/layout/AdminShell';
import AdminDashboard from '@/features/admin/dashboard/AdminDashboard';
import AdminProductsList from '@/features/admin/pages/AdminProductsList';
import AdminProductEditor from '@/features/admin/pages/AdminProductEditor';
import PlaceholderPage from '@/features/admin/pages/PlaceholderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop-paints.html', element: <ShopPage /> },
      { path: 'explore-colours.html', element: <ColoursPage /> },
      { path: 'product-details.html', element: <ProductPage /> },
      { path: 'cart.html', element: <CartPage /> },
      { path: 'login.html', element: <AuthPage /> },
      { path: 'profile.html', element: <ProfilePage /> },
      { path: 'admin.html', element: <AdminPage /> }, // Legacy entry point kept for safety
    ],
  },
  {
    path: '/admin',
    element: <AdminShell />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'products', element: <AdminProductsList /> },
      { path: 'products/:productId', element: <AdminProductEditor /> },
      { path: 'categories', element: <PlaceholderPage title="Categories Management" description="Create and manage product categories, collections, and hierarchy." /> },
      { path: 'orders', element: <PlaceholderPage title="Order Management" description="View, process, and track customer orders and fulfillments." /> },
      { path: 'customers', element: <PlaceholderPage title="Customer Directory" description="Manage customer profiles, purchase history, and segments." /> },
      { path: 'enquiries', element: <PlaceholderPage title="Customer Enquiries" description="Respond to bulk purchase requests and customer queries." /> },
      { path: 'settings', element: <PlaceholderPage title="Store Settings" description="Configure store details, tax rules, shipping zones, and admin roles." /> },
      { path: '*', element: <PlaceholderPage title="Under Construction" description="This module is currently being built and will be available soon." /> },
    ]
  }
], {
  basename: import.meta.env.BASE_URL,
});

export default router;
