const CategoryList = ({ categories, expandedCategories, onToggleCategory, selectedCategory }) => {
  return (
    <section className="category-section">
      <h2 className="section-title">Nuestras Categorías</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <div 
            key={category.id}
            className={`category-card ${expandedCategories[category.id] ? 'expanded' : ''} ${selectedCategory === category.id ? 'active' : ''}`}
          >
            <div 
              className="category-header"
              onClick={() => onToggleCategory(category.id)}
            >
              <div className="category-icon">
                {category.icon}
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              <div className={`expand-icon ${expandedCategories[category.id] ? 'rotated' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            
            <div className="category-image">
              <img src={category.image} alt={category.name} />
              <div className="category-overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
