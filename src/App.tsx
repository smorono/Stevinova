import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link, useNavigate as useNav } from "react-router-dom";
import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faTruck, faBrain, faUsers, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductCatalog from "./components/ProductCatalog";
import { products } from "./components/products";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ShoppingShowcase from "./components/ShoppingShowcase";
import GamesSection from "./components/GamesSection";
import FamilyEngagementCenter from "./components/FamilyEngagementCenter";
import EntertainmentChannel from "./components/EntertainmentChannel";
import KindPawsSection from "./components/KindPawsSection";
import PricingSection from "./components/PricingSection";
import HowItWorksSection from "./components/HowItWorksSection";
// Add more sections as needed

const Navbar: React.FC = () => (
  <nav style={{ background: '#1976d2', color: 'white', padding: '16px 32px', display: 'flex', alignItems: 'center' }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: 22, fontWeight: 600 }}>Stevinova<span style={{ fontSize: 12, marginLeft: 1 }}>®</span></Link>
    <span style={{ flex: 1 }} />
    <Link to="/shop" style={{ color: 'white', textDecoration: 'underline', fontSize: 18, marginLeft: 24 }}>Go to Shopping</Link>
  </nav>
);

const LandingPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <div id="shopping">
        <ShoppingShowcase />
      </div>
      <div id="family-wallet-system" style={{ minHeight: 300, background: '#1a1a1a', padding: '40px 0' }}>
        {/* Family Wallet System content here (as in your screenshot) */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Tooltip title="Back to Features section" arrow>
            <div 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              style={{ 
                display: 'inline-flex', 
                background: 'linear-gradient(135deg, #86efac20, #86efac40)', 
                border: '3px solid #86efac60', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(134, 239, 172, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(134, 239, 172, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(134, 239, 172, 0.3)';
              }}
            >
              <FontAwesomeIcon 
                icon={faWallet} 
                size="2x" 
                style={{ 
                  color: '#86efac',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }} 
              />
            </div>
          </Tooltip>
        </div>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: 40 }}>Family Wallet System</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 80 }}>
          <div>
            <h2 style={{ color: 'white' }}>Budget Control & Monitoring</h2>
            <ul style={{ color: '#4ade80', fontSize: 20, listStyle: 'none', padding: 0 }}>
              <li>💳 Set monthly budgets</li>
              <li>💳 Real-time spending alerts</li>
              <li>✅ Purchase approval workflow</li>
              <li>💳 Secure payment processing</li>
            </ul>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see features →</div>
          </div>
          <div>
            <h2 style={{ color: 'white' }}>Sample Wallet Dashboard</h2>
            <div style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Monthly Budget</div>
            <div style={{ color: 'white', fontSize: 40, fontWeight: 700 }}>$500</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Spent This Month</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>$127.50</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Remaining</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>$372.50</div>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see pricing →</div>
          </div>
        </div>
      </div>
      <div id="flexible-delivery" style={{ minHeight: 300, background: '#1a1a1a', padding: '40px 0' }}>
        {/* Flexible Delivery content */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Tooltip title="Back to Features section" arrow>
            <div 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              style={{ 
                display: 'inline-flex', 
                background: 'linear-gradient(135deg, #bbf7d020, #bbf7d040)', 
                border: '3px solid #bbf7d060', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(187, 247, 208, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(187, 247, 208, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(187, 247, 208, 0.3)';
              }}
            >
              <FontAwesomeIcon 
                icon={faTruck} 
                size="2x" 
                style={{ 
                  color: '#bbf7d0',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }} 
              />
            </div>
          </Tooltip>
        </div>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: 40 }}>Flexible Delivery</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 80 }}>
          <div>
            <h2 style={{ color: 'white' }}>Delivery Options</h2>
            <ul style={{ color: '#4ade80', fontSize: 20, listStyle: 'none', padding: 0 }}>
              <li>🚚 Instacart for local items</li>
              <li>📦 Amazon for everything else</li>
              <li>✅ Facility verifies orders</li>
              <li>📋 No inventory management</li>
            </ul>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see features →</div>
          </div>
          <div>
            <h2 style={{ color: 'white' }}>Benefits</h2>
            <div style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Multiple Options</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>2 Services</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Delivery Time</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Same Day</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Storage Required</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>None</div>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see pricing →</div>
          </div>
        </div>
      </div>
      <div id="games">
        <GamesSection />
      </div>
      <div id="memory-training" style={{ minHeight: 300, background: '#1a1a1a', padding: '40px 0' }}>
        {/* Memory Training content */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Tooltip title="Back to Features section" arrow>
            <div 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              style={{ 
                display: 'inline-flex', 
                background: 'linear-gradient(135deg, #fef3c720, #fef3c740)', 
                border: '3px solid #fef3c760', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(254, 243, 199, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(254, 243, 199, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(254, 243, 199, 0.3)';
            }}
          >
            <FontAwesomeIcon 
              icon={faBrain} 
              size="2x" 
              style={{ 
                color: '#fef3c7',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </div>
        </Tooltip>
      </div>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: 40 }}>Memory Training</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 80 }}>
          <div>
            <h2 style={{ color: 'white' }}>Cognitive Enhancement</h2>
            <ul style={{ color: '#4ade80', fontSize: 20, listStyle: 'none', padding: 0 }}>
              <li>🧠 Memory improvement games</li>
              <li>🎯 Attention training exercises</li>
              <li>📊 Progress tracking system</li>
              <li>🧩 Puzzle solving activities</li>
            </ul>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see features →</div>
          </div>
          <div>
            <h2 style={{ color: 'white' }}>Training Dashboard</h2>
            <div style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Games Available</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>15+</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Daily Sessions</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>20 min</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Progress Tracking</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Real-time</div>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see pricing →</div>
          </div>
        </div>
      </div>
      <div id="family-connection" style={{ minHeight: 300, background: '#1a1a1a', padding: '40px 0' }}>
        {/* Family Connection content */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Tooltip title="Back to Features section" arrow>
            <div 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              style={{ 
                display: 'inline-flex', 
                background: 'linear-gradient(135deg, #fecaca20, #fecaca40)', 
                border: '3px solid #fecaca60', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(254, 202, 202, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(254, 202, 202, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(254, 202, 202, 0.3)';
            }}
          >
            <FontAwesomeIcon 
              icon={faUsers} 
              size="2x" 
              style={{ 
                color: '#fecaca',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </div>
        </Tooltip>
      </div>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: 40 }}>Family Connection</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 80 }}>
          <div>
            <h2 style={{ color: 'white' }}>Communication Features</h2>
            <ul style={{ color: '#4ade80', fontSize: 20, listStyle: 'none', padding: 0 }}>
              <li>📹 Video chat & calls</li>
              <li>📸 Photo sharing</li>
              <li>💬 Family updates</li>
              <li>👨‍👩‍👧‍👦 Group messaging</li>
            </ul>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see features →</div>
          </div>
          <div>
            <h2 style={{ color: 'white' }}>Connection Dashboard</h2>
            <div style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Video Quality</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>HD</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Family Members</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Unlimited</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Privacy</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Secure</div>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see pricing →</div>
          </div>
        </div>
      </div>
      <div id="caregiver-tools" style={{ minHeight: 300, background: '#1a1a1a', padding: '40px 0' }}>
        {/* Caregiver Tools content */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Tooltip title="Back to Features section" arrow>
            <div 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              style={{ 
                display: 'inline-flex', 
                background: 'linear-gradient(135deg, #fbbf2420, #fbbf2440)', 
                border: '3px solid #fbbf2460', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(251, 191, 36, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.3)';
            }}
          >
            <FontAwesomeIcon 
              icon={faHeart} 
              size="2x" 
              style={{ 
                color: '#fbbf24',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </div>
        </Tooltip>
      </div>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: 40 }}>Caregiver Tools</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 80 }}>
          <div>
            <h2 style={{ color: 'white' }}>Care Management</h2>
            <ul style={{ color: '#4ade80', fontSize: 20, listStyle: 'none', padding: 0 }}>
              <li>💊 Medical reminders</li>
              <li>📊 Health monitoring</li>
              <li>💬 Communication tools</li>
              <li>📋 Care coordination</li>
            </ul>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see features →</div>
          </div>
          <div>
            <h2 style={{ color: 'white' }}>Care Dashboard</h2>
            <div style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Reminders</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>24/7</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Monitoring</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Real-time</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Support</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>24/7</div>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see pricing →</div>
          </div>
        </div>
      </div>
      <div id="independent-shopping" style={{ minHeight: 300, background: '#1a1a1a', padding: '40px 0' }}>
        {/* Independent Shopping content */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Tooltip title="Back to Features section" arrow>
            <div 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              style={{ 
                display: 'inline-flex', 
                background: 'linear-gradient(135deg, #a78bfa20, #a78bfa40)', 
                border: '3px solid #a78bfa60', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(167, 139, 250, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(167, 139, 250, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(167, 139, 250, 0.3)';
            }}
          >
            <FontAwesomeIcon 
              icon={faShoppingCart} 
              size="2x" 
              style={{ 
                color: '#a78bfa',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </div>
        </Tooltip>
      </div>
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: 40 }}>Independent Shopping</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 80 }}>
          <div>
            <h2 style={{ color: 'white' }}>Shopping Features</h2>
            <ul style={{ color: '#4ade80', fontSize: 20, listStyle: 'none', padding: 0 }}>
              <li>🛒 Independent shopping</li>
              <li>👥 Caregiver assistance</li>
              <li>🔘 Large buttons</li>
              <li>🖼️ Clear product images</li>
            </ul>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see features →</div>
          </div>
          <div>
            <h2 style={{ color: 'white' }}>Accessibility Dashboard</h2>
            <div style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Interface</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Easy-to-use</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Buttons</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>Large</div>
            <div style={{ color: '#fff', fontSize: 18, margin: '24px 0 8px 0' }}>Independence</div>
            <div style={{ color: '#4ade80', fontSize: 32, fontWeight: 700 }}>100%</div>
            <div style={{ color: 'white', marginTop: 20 }}>Click to see pricing →</div>
          </div>
        </div>
      </div>
      <div id="entertainment-channel">
        <EntertainmentChannel />
      </div>
      <div id="kindpaws">
        <KindPawsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: 32 }}><h2>Product Not Found</h2></div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', background: 'white', borderRadius: 16, boxShadow: '0 2px 12px #0002', padding: 32, textAlign: 'center' }}>
      {/* Product Icon centered at top */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
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
        }}>
          <FontAwesomeIcon icon={product.icon} size="lg" style={{ color: '#4ade80' }} />
        </div>
      </div>
      {/* Removed product image */}
      <h2 style={{ fontSize: 32, color: '#1976d2', marginBottom: 8 }}>{product.name}</h2>
      <p style={{ fontSize: 22, color: '#1976d2', fontWeight: 600, margin: '8px 0' }}>${product.price.toFixed(2)}</p>
      <p style={{ fontSize: 18, color: '#444', marginBottom: 24 }}>{product.description}</p>
      <button style={{ background: '#1976d2', color: 'white', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 22, cursor: 'pointer', marginBottom: 24 }}>
        Add to Cart
      </button>
      <br />
      <button onClick={() => navigate('/shop')} style={{ background: 'none', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 8, padding: '10px 28px', fontSize: 18, cursor: 'pointer', marginTop: 8 }}>
        &larr; Back to Shopping
      </button>
    </div>
  );
};

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName || "");
  const filtered = products.filter(p => p.category === decodedCategory);

  return (
    <div style={{ maxWidth: 1100, margin: '40px auto', padding: 24 }}>
      <h2 style={{ color: '#1976d2', fontSize: 32, marginBottom: 24 }}>{decodedCategory} Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
        {filtered.map(product => (
          <div key={product.id} style={{ background: 'white', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
            <h3 style={{ fontSize: 22, margin: '8px 0 4px 0', textAlign: 'center', color: '#1976d2' }}>{product.name}</h3>
            <p style={{ color: '#1976d2', fontWeight: 600, fontSize: 20, margin: '4px 0' }}>${product.price.toFixed(2)}</p>
            <p style={{ fontSize: 16, color: '#444', textAlign: 'center', margin: '8px 0 16px 0' }}>{product.description}</p>
            <button style={{ background: '#1976d2', color: 'white', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 18, cursor: 'pointer', width: '100%' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p style={{ color: '#888', fontSize: 20, marginTop: 32 }}>No products found in this category.</p>}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
