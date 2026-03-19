import React, { useState, useEffect } from 'react'
import SplashScreen from './screens/SplashScreen'
import CategoryList from './screens/CategoryList'
import MenuList from './screens/MenuList'
import ProductDetail from './screens/ProductDetail'
import { fetchMenu } from './api/menuData'

function App() {
  // Screens: 'splash' -> 'categories' -> 'list' -> 'detail'
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load menu data when app starts
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchMenu();
      setMenuItems(data.menuItems);
      setCategories(data.categories);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleStart = () => {
    if (!isLoading) {
      setCurrentScreen('categories');
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentScreen('list');
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentScreen('detail');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentScreen('categories');
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
    setCurrentScreen('list');
  };

  return (
    <div className="w-full h-full" style={{ background: '#3A0D1E', color: '#F5E0D8' }}>
      {currentScreen === 'splash' && (
        <SplashScreen onStart={handleStart} />
      )}

      {currentScreen === 'categories' && (
        <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
      )}

      {currentScreen === 'list' && selectedCategory && (
        <MenuList
          category={selectedCategory}
          items={menuItems}
          onSelectProduct={handleSelectProduct}
          onBack={handleBackToCategories}
        />
      )}

      {currentScreen === 'detail' && selectedProduct && (
        <ProductDetail product={selectedProduct} onBack={handleBackToList} />
      )}
    </div>
  )
}

export default App
