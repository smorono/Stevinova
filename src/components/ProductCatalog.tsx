import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products, Product } from "./products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';

const facilityLogo = "https://via.placeholder.com/120x40?text=Facility+Logo";
const facilityName = "Stevinova® Smart Shopping";

interface CartItem {
  product: Product;
  quantity: number;
}

// Helper to get unique categories and counts
const getCategories = (products: Product[]) => {
  const map = new Map<string, number>();
  products.forEach(p => {
    map.set(p.category, (map.get(p.category) || 0) + 1);
  });
  return Array.from(map.entries());
};

const ProductCatalog: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const changeQuantity = (productId: number, delta: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  // Get categories and counts
  const categories = getCategories(products);

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f7f9fa', minHeight: '100vh', paddingBottom: 40 }}>
      {/* Facility Branding & Cart Icon */}
      <header style={{ display: 'flex', alignItems: 'center', padding: 24, background: '#1976d2', color: 'white', marginBottom: 32, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: 16, textDecoration: 'none' }}>
            <Avatar sx={{
              bgcolor: 'background.paper',
              width: 56,
              height: 56,
              mr: 2,
              background: 'linear-gradient(135deg, #4ade8020, #4ade8040)',
              border: '2px solid #4ade8060',
              boxShadow: '0 2px 8px #4ade8030',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 4px 16px #4ade8050',
                transform: 'scale(1.08)'
              }
            }}>
              <FontAwesomeIcon icon={faStore} size="lg" style={{ color: '#4ade80' }} />
            </Avatar>
          </Link>
          <h1 style={{ fontSize: 28, margin: 0 }}>{facilityName}</h1>
        </div>
        <button
          style={{ background: 'white', color: '#1976d2', border: 'none', borderRadius: 50, width: 56, height: 56, position: 'relative', cursor: 'pointer', fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setCartOpen(true)}
          aria-label="View Cart"
        >
          <span role="img" aria-label="cart">🛒</span>
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: 6, right: 6, background: '#1976d2', color: 'white', borderRadius: 12, padding: '2px 8px', fontSize: 16, fontWeight: 700 }}>{cartCount}</span>
          )}
        </button>
      </header>
      {/* Category List */}
      <nav style={{ maxWidth: 1100, margin: '0 auto 32px auto', display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {categories.map(([cat, count]) => (
          <Link key={cat} to={`/category/${encodeURIComponent(cat)}`} style={{ background: '#fff', color: '#1976d2', borderRadius: 8, padding: '10px 22px', fontSize: 18, fontWeight: 600, textDecoration: 'none', boxShadow: '0 1px 4px #0001', marginBottom: 8 }}>
            {cat} ({count} items)
          </Link>
        ))}
      </nav>
      {/* Product Grid */}
      <main style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {products.map(product => (
            <div key={product.id} style={{ background: 'white', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Product Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4ade8020, #4ade8040)',
                border: '2px solid #4ade8060',
                boxShadow: '0 2px 8px #4ade8030',
                marginBottom: 12
              }}>
                <FontAwesomeIcon icon={product.icon} size="lg" style={{ color: '#4ade80' }} />
              </div>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <h2 style={{ fontSize: 22, margin: '8px 0 4px 0', textAlign: 'center', color: '#1976d2', textDecoration: 'underline' }}>{product.name}</h2>
              </Link>
              <p style={{ color: '#1976d2', fontWeight: 600, fontSize: 20, margin: '4px 0' }}>${product.price.toFixed(2)}</p>
              <p style={{ fontSize: 16, color: '#444', textAlign: 'center', margin: '8px 0 16px 0' }}>{product.description}</p>
              <button style={{ background: '#1976d2', color: 'white', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 18, cursor: 'pointer', width: '100%' }}
                onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
      {/* Cart Sidebar */}
      {cartOpen && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: 360, height: '100%', background: 'white', boxShadow: '-2px 0 12px #0002', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: 24, color: '#1976d2' }}>Your Cart</h2>
            <button onClick={() => setCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#1976d2' }}>&times;</button>
          </div>
          {cart.length === 0 ? (
            <p style={{ color: '#888', fontSize: 18, textAlign: 'center', marginTop: 40 }}>Your cart is empty.</p>
          ) : (
            <>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {cart.map(item => (
                  <div key={item.product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 18, borderBottom: '1px solid #eee', paddingBottom: 10 }}>
                    <img src={item.product.image} alt={item.product.name} style={{ width: 48, height: 48, borderRadius: 8, marginRight: 12 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 18 }}>{item.product.name}</div>
                      <div style={{ color: '#1976d2', fontWeight: 600 }}>${item.product.price.toFixed(2)}</div>
                      <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                        <button onClick={() => changeQuantity(item.product.id, -1)} style={{ background: '#eee', border: 'none', borderRadius: 6, width: 28, height: 28, fontSize: 20, cursor: 'pointer', marginRight: 6 }}>-</button>
                        <span style={{ fontSize: 18, margin: '0 8px' }}>{item.quantity}</span>
                        <button onClick={() => changeQuantity(item.product.id, 1)} style={{ background: '#eee', border: 'none', borderRadius: 6, width: 28, height: 28, fontSize: 20, cursor: 'pointer', marginLeft: 6 }}>+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} style={{ background: 'none', border: 'none', color: '#d32f2f', fontSize: 22, marginLeft: 8, cursor: 'pointer' }} title="Remove">🗑️</button>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: 16, marginTop: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Total: ${cartTotal.toFixed(2)}</div>
                <button style={{ background: '#1976d2', color: 'white', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 20, width: '100%', cursor: 'pointer', fontWeight: 600 }}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog; 