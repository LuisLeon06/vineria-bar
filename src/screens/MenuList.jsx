const MenuList = ({ items, onProductClick }) => {
  return (
    <section className="menu-section">
      <h2 className="section-title">Platos Disponibles</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="menu-item-card"
            onClick={() => onProductClick(item)}
          >
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
              <div className="menu-item-overlay"></div>
            </div>
            <div className="menu-item-content">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-short-desc">{item.shortDescription}</p>
              <div className="menu-item-footer">
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
                <button className="view-details-btn">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuList;
