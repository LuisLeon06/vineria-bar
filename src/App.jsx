import { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import CategoryList from './screens/CategoryList';
import MenuList from './screens/MenuList';
import ProductDetail from './screens/ProductDetail';
import { categories, menuItems } from './api/menuData';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Español');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [tableNumber, setTableNumber] = useState('');

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'jp', name: '日本語', flag: '🇯🇵' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'cn', name: '中文', flag: '🇨🇳' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
    if (!expandedCategories[categoryId]) {
      setSelectedCategory(categoryId);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setSelectedProduct(null);
    setShowCartModal(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrderSubmit = () => {
    if (tableNumber && cartItems.length > 0) {
      alert(`✅ Pedido registrado para Mesa ${tableNumber}\n💰 Total: $${getTotalPrice().toFixed(2)}`);
      setCartItems([]);
      setTableNumber('');
      setShowCartModal(false);
    }
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang.name);
    setShowLanguageMenu(false);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Vineria Bar</h1>
          <div className="header-icons">
            {/* Language Selector */}
            <div className="language-selector">
              <button 
                className="icon-button" 
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                aria-label="Cambiar idioma"
              >
                <svg className="world-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M12 2c3 3 3 17 0 20" />
                  <path d="M12 2c-3 3-3 17 0 20" />
                </svg>
              </button>
              {showLanguageMenu && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`language-option ${selectedLanguage === lang.name ? 'active' : ''}`}
                      onClick={() => selectLanguage(lang)}
                    >
                      <span className="flag">{lang.flag}</span>
                      <span className="lang-name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button 
              className="icon-button cart-button" 
              onClick={() => setShowCartModal(true)}
              aria-label="Ver carrito"
            >
              <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
              )}
            </button>

            {/* Admin Button - INVISIBLE pero clicable (solo staff sabe dónde) */}
            <button 
              className="icon-button admin-button" 
              onClick={() => setShowAdminModal(true)}
              aria-label="Acceso administrativo"
            >
              <svg className="admin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                <line x1="12" y1="13" x2="12" y2="13" />
                <path d="M8 11h8v6H8z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <CategoryList 
          categories={categories}
          expandedCategories={expandedCategories}
          onToggleCategory={toggleCategory}
          selectedCategory={selectedCategory}
        />
        
        {selectedCategory && (
          <MenuList 
            items={menuItems.filter(item => item.categoryId === selectedCategory)}
            onProductClick={handleProductClick}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct}
          onClose={closeProductDetail}
          onAddToCart={() => addToCart(selectedProduct)}
        />
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <div className="modal-overlay" onClick={() => setShowCartModal(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowCartModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="cart-content">
              <h2 className="cart-title">
                <svg className="cart-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Pedido - Mesa Nro
              </h2>
              
              <div className="table-input-section">
                <label htmlFor="tableNumber">Número de Mesa:</label>
                <input
                  type="number"
                  id="tableNumber"
                  className="table-input"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Ingrese número de mesa"
                  min="1"
                />
              </div>

              <div className="cart-items">
                {cartItems.length === 0 ? (
                  <div className="empty-cart">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <p>No hay productos en el pedido</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="cart-item-controls">
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="qty">{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span className="total-amount">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button 
                    className="submit-order-btn"
                    onClick={handleOrderSubmit}
                    disabled={!tableNumber}
                  >
                    Confirmar Pedido
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Admin Access Modal */}
      {showAdminModal && (
        <div className="modal-overlay" onClick={() => setShowAdminModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-content">
              <div className="admin-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                  <line x1="12" y1="13" x2="12" y2="13" />
                  <path d="M8 11h8v6H8z" />
                </svg>
              </div>
              <h2>Acceso Restringido</h2>
              <p>Solo acceso personal autorizado</p>
              <button 
                className="close-modal-btn"
                onClick={() => setShowAdminModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer - Transparente y elegante */}
      <footer className="footer">
        <div className="footer-content">
          <span className="footer-text">Sobre Nosotros</span>
          <span className="footer-separator">|</span>
          <span className="footer-text">Contáctanos</span>
        </div>
      </footer>
    </div>
  );
}

export default App;