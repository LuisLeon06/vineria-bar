const ProductDetail = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            <div className="image-glow"></div>
          </div>
          
          <div className="product-detail-info">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-category">{product.category}</p>
            
            <div className="product-description-section">
              <h3>Descripción</h3>
              <p className="product-description">{product.description}</p>
            </div>
            
            {product.ingredients && (
              <div className="product-ingredients">
                <h3>Ingredientes</h3>
                <p>{product.ingredients}</p>
              </div>
            )}
            
            {product.allergens && (
              <div className="product-allergens">
                <h3>Alergenos</h3>
                <p>{product.allergens}</p>
              </div>
            )}
            
            <div className="product-footer">
              <div className="product-price">${product.price.toFixed(2)}</div>
              <button className="add-to-cart-btn" onClick={onAddToCart}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Agregar al Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
