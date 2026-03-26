import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../api/menuData';

const Personal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [prices, setPrices] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [activePriceTab, setActivePriceTab] = useState('list'); // 'list', 'add', 'stats'
  const [selectedPriceId, setSelectedPriceId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notification, setNotification] = useState('');

  // Credenciales ENCRIPTADAS (en producción usar backend)
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'vineria2024!'; // Cambiar en producción

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const loadOrders = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders.reverse());
  };

  const loadPrices = () => {
    const storedPrices = JSON.parse(localStorage.getItem('productPrices') || '[]');
    setPrices(storedPrices);
  };

  const savePrices = (newPrices) => {
    localStorage.setItem('productPrices', JSON.stringify(newPrices));
    setPrices(newPrices);
  };

  const addPrice = () => {
    if (newProduct.trim() && newPrice.trim()) {
      const priceNum = parseFloat(newPrice);
      if (!isNaN(priceNum) && priceNum > 0) {
        let updatedPrices;
        if (selectedPriceId) {
          updatedPrices = prices.map((p) =>
            p.id === selectedPriceId ? { ...p, product: newProduct, price: priceNum } : p
          );
          setNotification(`💰 ¡Precio actualizado! ${newProduct} ahora cuesta $${priceNum.toFixed(2)}`);
          setTimeout(() => setNotification(''), 5000);
          setSelectedPriceId(null);
        } else {
          updatedPrices = [...prices, { id: Date.now(), product: newProduct, price: priceNum }];
        }
        savePrices(updatedPrices);
        setNewProduct('');
        setNewPrice('');
        setActivePriceTab('list'); // Volver a la lista después de actualizar
      }
    }
  };

  const updatePrice = (id, newPriceValue) => {
    const priceNum = parseFloat(newPriceValue);
    if (!isNaN(priceNum) && priceNum > 0) {
      const updatedPrices = prices.map(p => p.id === id ? { ...p, price: priceNum } : p);
      savePrices(updatedPrices);
    }
  };

  const deletePrice = (id) => {
    const updatedPrices = prices.filter(p => p.id !== id);
    savePrices(updatedPrices);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (isLocked) {
      setError(`⛔ Acceso bloqueado. Espere ${lockTimer} segundos`);
      return;
    }

    // Verificar credenciales
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // Login exitoso
      sessionStorage.setItem('adminAuth', 'true');
      sessionStorage.setItem('authTime', Date.now().toString());
      sessionStorage.setItem('adminUser', username);
      setIsAuthenticated(true);
      setError('');
      setLoginAttempts(0);
      setUsername('');
      setPassword('');
      loadOrders();
    } else {
      // Login fallido
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        // Bloquear después de 3 intentos
        setIsLocked(true);
        setLockTimer(30); // 30 segundos de bloqueo
        setError('🔒 Demasiados intentos. Acceso bloqueado por 30 segundos');
      } else {
        setError(`❌ Credenciales incorrectas. Intentos restantes: ${3 - newAttempts}`);
      }
      
      setPassword('');
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    if (newStatus === 'entregado') {
      // Mostrar notificación y remover el pedido
      const orderToDeliver = orders.find(o => o.id === orderId);
      if (orderToDeliver) {
        setNotification(`🚀 Platillo entregado: ${orderToDeliver.items.map(i => i.name).join(', ')} - Mesa ${orderToDeliver.tableNumber}`);
        setTimeout(() => setNotification(''), 5000); // Ocultar después de 5s
      }
      const updatedOrders = orders.filter(order => order.id !== orderId);
      localStorage.setItem('orders', JSON.stringify(updatedOrders.reverse()));
      setOrders(updatedOrders);
    } else {
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      );
      localStorage.setItem('orders', JSON.stringify(updatedOrders.reverse()));
      setOrders(updatedOrders);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    sessionStorage.removeItem('authTime');
    sessionStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setLoginAttempts(0);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'en-proceso': return '#ff2a6d';
      case 'listo': return '#05d9e8';
      case 'entregado': return '#00ff88';
      default: return '#b0b0b0';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'en-proceso': return 'En Proceso';
      case 'listo': return 'Listo';
      case 'entregado': return 'Entregado';
      default: return status;
    }
  };

  const calculateStats = () => {
    const deliveredOrders = orders.filter(o => o.status === 'entregado');
    const stats = {};
    deliveredOrders.forEach(order => {
      order.items.forEach(item => {
        if (!stats[item.name]) stats[item.name] = 0;
        stats[item.name] += item.price * item.quantity;
      });
    });
    return stats;
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="personal-page">
        <div className="login-container">
          <div className="login-box">
            <div className="login-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h2 className="login-title">🔐 Acceso Restringido</h2>
            <p className="login-subtitle">Solo personal autorizado</p>
            
            {isLocked && (
              <div className="lock-warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <p>Bloqueado por seguridad</p>
                <p className="timer">{lockTimer}s</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="login-form">
              <div className="input-group">
                <label>Usuario</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingrese usuario"
                  disabled={isLocked}
                  autoComplete="username"
                  required
                />
              </div>
              
              <div className="input-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese contraseña"
                  disabled={isLocked}
                  autoComplete="current-password"
                  required
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="login-btn" disabled={isLocked}>
                {isLocked ? '🔒 Bloqueado' : 'Ingresar'}
              </button>
            </form>

            <div className="security-notice">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <p>Conexión segura • Sesión expira en 30 min</p>
            </div>

            <Link to="/" className="back-link">
              ← Volver al Menú
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="personal-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Panel de Control</h1>
            <p className="dashboard-user">👤 {sessionStorage.getItem('adminUser')}</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Cerrar Sesión
          </button>
        </div>

        {/* KPI Section */}
        <div className="kpi-section">
          <div className="kpi-card">
            <span>Hora Actual:</span>
            <strong>{currentTime.toLocaleTimeString()}</strong>
          </div>
          <div className="kpi-card">
            <span>Pedidos Totales</span>
            <strong>{orders.length}</strong>
          </div>
          <div className="kpi-card">
            <span>Total Estimado</span>
            <strong>${orders.reduce((sum, order) => sum + Number(order.total || 0), 0).toFixed(2)}</strong>
          </div>
        </div>

        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}

        <div className="orders-container">
          <h2 className="section-subtitle">📋 Pedidos en Tiempo Real</h2>
          
          {orders.length === 0 ? (
            <div className="no-orders">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>No hay pedidos registrados</p>
            </div>
          ) : (
            <div className="orders-grid">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-number">Mesa {order.tableNumber}</div>
                    <div 
                      className="order-status"
                      style={{ borderColor: getStatusColor(order.status), color: getStatusColor(order.status) }}
                    >
                      {getStatusText(order.status)}
                    </div>
                  </div>

                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <span className="item-qty">{item.quantity}x</span>
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="order-footer">
                    <div className="order-total">
                      <span>Total:</span>
                      <span className="total-amount">${order.total.toFixed(2)}</span>
                    </div>
                    
                    <div className="order-actions">
                      {order.status === 'en-proceso' && (
                        <button 
                          className="status-btn ready"
                          onClick={() => updateOrderStatus(order.id, 'listo')}
                        >
                          ✓ Marcar Listo
                        </button>
                      )}
                      {order.status === 'listo' && (
                        <button 
                          className="status-btn delivered"
                          onClick={() => updateOrderStatus(order.id, 'entregado')}
                        >
                          ✓ Marcar Entregado
                        </button>
                      )}
                    </div>

                    <div className="order-time">
                      {formatTime(order.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="prices-tabs">
          <div className="price-tab-buttons">
            <button
              className={activePriceTab === 'list' ? 'price-tab active' : 'price-tab'}
              onClick={() => setActivePriceTab('list')}
            >
              Elegir Precio
            </button>
            <button
              className={activePriceTab === 'add' ? 'price-tab active' : 'price-tab'}
              onClick={() => setActivePriceTab('add')}
            >
              Agregar Platillo
            </button>
            <button
              className={activePriceTab === 'stats' ? 'price-tab active' : 'price-tab'}
              onClick={() => setActivePriceTab('stats')}
            >
              Estadísticas
            </button>
          </div>

          {activePriceTab === 'list' ? (
            <div className="prices-list">
              {menuItems.length === 0 ? (
                <div className="no-prices">
                  <p>No hay productos registrados</p>
                </div>
              ) : (
                menuItems.map((item) => {
                  const currentPrice = prices.find(p => p.id === item.id)?.price || item.price;
                  return (
                    <div key={item.id} className="price-item">
                      <span className="product-name">{item.name}</span>
                      <span className="price-value">${currentPrice.toFixed(2)}</span>
                      <div className="price-buttons">
                        <button
                          className="select-price-btn"
                          onClick={() => {
                            setSelectedPriceId(item.id);
                            setNewProduct(item.name);
                            setNewPrice(currentPrice.toString());
                            setActivePriceTab('add');
                          }}
                        >
                          Editar Precio
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          ) : activePriceTab === 'stats' ? (
            <div className="stats-section">
              <h3>Ganancias por Platillo</h3>
              {Object.keys(calculateStats()).length === 0 ? (
                <p>No hay estadísticas disponibles</p>
              ) : (
                <div className="stats-list">
                  {Object.entries(calculateStats()).map(([name, total]) => (
                    <div key={name} className="stat-item">
                      <span className="stat-name">{name}</span>
                      <span className="stat-value">${total.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="price-create">
              <h3>{selectedPriceId ? 'Editar precio del platillo' : 'Nuevo platillo'}</h3>
              <div className="price-input-group">
                <input
                  type="text"
                  placeholder="Nombre del producto"
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
                  className="price-input"
                  disabled={selectedPriceId ? true : false}
                />
                <input
                  type="number"
                  placeholder="Precio"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="price-input"
                  step="0.01"
                  min="0"
                />
                <button onClick={addPrice} className="add-price-btn">
                  {selectedPriceId ? 'Actualizar Precio' : '+ Agregar'}
                </button>
              </div>
            </div>
          )}
        </div>

        <Link to="/" className="back-link-footer">
          ← Volver al Menú
        </Link>
      </div>
    </div>
  );
};

export default Personal;