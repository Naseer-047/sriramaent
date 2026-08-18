import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  size?: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, size: string | undefined, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sriramaent_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load cart', e);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('sriramaent_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === item.size);
      const qtyToAdd = item.quantity || 1;
      
      if (existing) {
        return prev.map(i => 
          i.id === item.id && i.size === item.size 
            ? { ...i, quantity: i.quantity + qtyToAdd }
            : i
        );
      }
      return [...prev, { ...item, quantity: qtyToAdd }];
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    setCart(prev => prev.filter(i => !(i.id === id && i.size === size)));
  };

  const updateQuantity = (id: string, size: string | undefined, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id && i.size === size) {
        const newQuantity = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQuantity };
      }
      return i;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
