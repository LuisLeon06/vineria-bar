import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import Personal from './pages/Personal';
import SobreNosotros from './pages/SobreNosotros.jsx';
import Contactanos from './pages/Contactanos';
import { categories, menuItems } from './api/menuData';
import './App.css';

// Diccionario completo de traducciones
const translations = {
  'Español': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Nuestras Categorías',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Variedades tradicionales',
    'Pizzas': 'Pizzas',
    'Variedades artesanales': 'Variedades artesanales',
    'Vinos': 'Vinos',
    'Variedades premium': 'Variedades premium',
    'Ver': 'Ver',
    'Descripción': 'Descripción',
    'Ingredientes': 'Ingredientes',
    'Alergenos': 'Alergenos',
    'Agregar al Pedido': 'Agregar al Pedido',
    'Sobre Nosotros': 'Sobre Nosotros',
    'Contáctanos': 'Contáctanos',
    'Personal': 'Personal',
    'Buscar idioma...': 'Buscar idioma...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Top 5 Idiomas Más Hablados',
    'idiomas disponibles': 'idiomas disponibles',
    'No se encontró el idioma': 'No se encontró el idioma'
  },
  'English': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Our Categories',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Traditional Varieties',
    'Pizzas': 'Pizzas',
    'Variedades artesanales': 'Artisanal Varieties',
    'Vinos': 'Wines',
    'Variedades premium': 'Premium Varieties',
    'Ver': 'View',
    'Descripción': 'Description',
    'Ingredientes': 'Ingredients',
    'Alergenos': 'Allergens',
    'Agregar al Pedido': 'Add to Order',
    'Sobre Nosotros': 'About Us',
    'Contáctanos': 'Contact Us',
    'Personal': 'Staff',
    'Buscar idioma...': 'Search language...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Top 5 Most Spoken Languages',
    'idiomas disponibles': 'languages available',
    'No se encontró el idioma': 'Language not found'
  },
  'Chinese': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': '我们的类别',
    'Empanadas': '恩帕纳达斯',
    'Variedades tradicionales': '传统品种',
    'Pizzas': '披萨',
    'Variedades artesanales': '手工品种',
    'Vinos': '葡萄酒',
    'Variedades premium': '优质品种',
    'Ver': '查看',
    'Descripción': '描述',
    'Ingredientes': '成分',
    'Alergenos': '过敏原',
    'Agregar al Pedido': '添加到订单',
    'Sobre Nosotros': '关于我们',
    'Contáctanos': '联系我们',
    'Personal': '员工',
    'Buscar idioma...': '搜索语言...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 使用人数最多的5种语言',
    'idiomas disponibles': '可用语言',
    'No se encontró el idioma': '未找到语言'
  },
  'Hindi': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'हमारी श्रेणियां',
    'Empanadas': 'एम्पनाडास',
    'Variedades tradicionales': 'पारंपरिक किस्में',
    'Pizzas': 'पिज़्ज़ा',
    'Variedades artesanales': 'हस्तशिल्प किस्में',
    'Vinos': 'वाइन',
    'Variedades premium': 'प्रीमियम किस्में',
    'Ver': 'देखें',
    'Descripción': 'विवरण',
    'Ingredientes': 'सामग्री',
    'Alergenos': 'एलर्जी',
    'Agregar al Pedido': 'ऑर्डर में जोड़ें',
    'Sobre Nosotros': 'हमारे बारे में',
    'Contáctanos': 'संपर्क करें',
    'Personal': 'कर्मचारी',
    'Buscar idioma...': 'भाषा खोजें...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 शीर्ष 5 सबसे अधिक बोली जाने वाली भाषाएं',
    'idiomas disponibles': 'उपलब्ध भाषाएं',
    'No se encontró el idioma': 'भाषा नहीं मिली'
  },
  'French': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Nos Catégories',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Variétés Traditionnelles',
    'Pizzas': 'Pizzas',
    'Variedades artesanales': 'Variétés Artisanales',
    'Vinos': 'Vins',
    'Variedades premium': 'Variétés Premium',
    'Ver': 'Voir',
    'Descripción': 'Description',
    'Ingredientes': 'Ingrédients',
    'Alergenos': 'Allergènes',
    'Agregar al Pedido': 'Ajouter à la Commande',
    'Sobre Nosotros': 'À Propos',
    'Contáctanos': 'Contactez-nous',
    'Personal': 'Personnel',
    'Buscar idioma...': 'Rechercher une langue...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Top 5 des Langues les Plus Parlées',
    'idiomas disponibles': 'langues disponibles',
    'No se encontró el idioma': 'Langue non trouvée'
  },
  'Arabic': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'فئاتنا',
    'Empanadas': 'إمباناداس',
    'Variedades tradicionales': 'أصناف تقليدية',
    'Pizzas': 'بيتزا',
    'Variedades artesanales': 'أصناف حرفية',
    'Vinos': 'نبيذ',
    'Variedades premium': 'أصناف متميزة',
    'Ver': 'عرض',
    'Descripción': 'وصف',
    'Ingredientes': 'مكونات',
    'Alergenos': 'مسببات الحساسية',
    'Agregar al Pedido': 'أضف إلى الطلب',
    'Sobre Nosotros': 'معلومات عنا',
    'Contáctanos': 'اتصل بنا',
    'Personal': 'موظف',
    'Buscar idioma...': 'بحث عن لغة...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 أكثر 5 لغات انتشاراً',
    'idiomas disponibles': 'اللغات المتاحة',
    'No se encontró el idioma': 'لم يتم العثور على اللغة'
  },
  'Portuguese': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Nossas Categorias',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Variedades Tradicionais',
    'Pizzas': 'Pizzas',
    'Variedades artesanales': 'Variedades Artesanais',
    'Vinos': 'Vinhos',
    'Variedades premium': 'Variedades Premium',
    'Ver': 'Ver',
    'Descripción': 'Descrição',
    'Ingredientes': 'Ingredientes',
    'Alergenos': 'Alérgenos',
    'Agregar al Pedido': 'Adicionar ao Pedido',
    'Sobre Nosotros': 'Sobre Nós',
    'Contáctanos': 'Contate-nos',
    'Personal': 'Pessoal',
    'Buscar idioma...': 'Buscar idioma...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Top 5 Idiomas Mais Falados',
    'idiomas disponibles': 'idiomas disponíveis',
    'No se encontró el idioma': 'Idioma não encontrado'
  },
  'Russian': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Наши Категории',
    'Empanadas': 'Эмпанадас',
    'Variedades tradicionales': 'Традиционные Сорта',
    'Pizzas': 'Пицца',
    'Variedades artesanales': 'Ремесленные Сорта',
    'Vinos': 'Вина',
    'Variedades premium': 'Премиум Сорта',
    'Ver': 'Просмотр',
    'Descripción': 'Описание',
    'Ingredientes': 'Ингредиенты',
    'Alergenos': 'Аллергены',
    'Agregar al Pedido': 'Добавить к Заказу',
    'Sobre Nosotros': 'О Нас',
    'Contáctanos': 'Свяжитесь с Нами',
    'Personal': 'Персонал',
    'Buscar idioma...': 'Поиск языка...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Топ 5 Самых Распространенных Языков',
    'idiomas disponibles': 'доступных языков',
    'No se encontró el idioma': 'Язык не найден'
  },
  'German': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Unsere Kategorien',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Traditionelle Sorten',
    'Pizzas': 'Pizzas',
    'Variedades artesanales': 'Handwerkliche Sorten',
    'Vinos': 'Weine',
    'Variedades premium': 'Premium Sorten',
    'Ver': 'Ansehen',
    'Descripción': 'Beschreibung',
    'Ingredientes': 'Zutaten',
    'Alergenos': 'Allergene',
    'Agregar al Pedido': 'Zur Bestellung Hinzufügen',
    'Sobre Nosotros': 'Über Uns',
    'Contáctanos': 'Kontaktieren Sie Uns',
    'Personal': 'Personal',
    'Buscar idioma...': 'Sprache suchen...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Top 5 Meistgesprochene Sprachen',
    'idiomas disponibles': 'verfügbare Sprachen',
    'No se encontró el idioma': 'Sprache nicht gefunden'
  },
  'Japanese': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': '私たちのカテゴリ',
    'Empanadas': 'エンパナーダ',
    'Variedades tradicionales': '伝統的な種類',
    'Pizzas': 'ピザ',
    'Variedades artesanales': '職人の種類',
    'Vinos': 'ワイン',
    'Variedades premium': 'プレミアム種類',
    'Ver': '表示',
    'Descripción': '説明',
    'Ingredientes': '材料',
    'Alergenos': 'アレルゲン',
    'Agregar al Pedido': '注文に追加',
    'Sobre Nosotros': '私たちについて',
    'Contáctanos': 'お問い合わせ',
    'Personal': 'スタッフ',
    'Buscar idioma...': '言語を検索...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 最も話されている言語トップ5',
    'idiomas disponibles': '利用可能な言語',
    'No se encontró el idioma': '言語が見つかりません'
  },
  'Italian': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Le Nostre Categorie',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Varietà Tradizionali',
    'Pizzas': 'Pizze',
    'Variedades artesanales': 'Varietà Artigianali',
    'Vinos': 'Vini',
    'Variedades premium': 'Varietà Premium',
    'Ver': 'Vedi',
    'Descripción': 'Descrizione',
    'Ingredientes': 'Ingredienti',
    'Alergenos': 'Allergeni',
    'Agregar al Pedido': 'Aggiungi all\'Ordine',
    'Sobre Nosotros': 'Chi Siamo',
    'Contáctanos': 'Contattaci',
    'Personal': 'Personale',
    'Buscar idioma...': 'Cerca lingua...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Top 5 Lingue Più Parlate',
    'idiomas disponibles': 'lingue disponibili',
    'No se encontró el idioma': 'Lingua non trovata'
  },
  'Indonesian': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Kategori Kami',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Varietas Tradisional',
    'Pizzas': 'Pizza',
    'Variedades artesanales': 'Varietas Buatan Tangan',
    'Vinos': 'Anggur',
    'Variedades premium': 'Varietas Premium',
    'Ver': 'Lihat',
    'Descripción': 'Deskripsi',
    'Ingredientes': 'Bahan',
    'Alergenos': 'Alergen',
    'Agregar al Pedido': 'Tambahkan ke Pesanan',
    'Sobre Nosotros': 'Tentang Kami',
    'Contáctanos': 'Hubungi Kami',
    'Personal': 'Staf',
    'Buscar idioma...': 'Cari bahasa...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 5 Bahasa Paling Banyak Digunakan',
    'idiomas disponibles': 'bahasa tersedia',
    'No se encontró el idioma': 'Bahasa tidak ditemukan'
  },
  'Swahili': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'Makundi Yetu',
    'Empanadas': 'Empanadas',
    'Variedades tradicionales': 'Aina za Asili',
    'Pizzas': 'Piza',
    'Variedades artesanales': 'Aina za Ufundi',
    'Vinos': 'Divai',
    'Variedades premium': 'Aina za Malipo',
    'Ver': 'Tazama',
    'Descripción': 'Maelezo',
    'Ingredientes': 'Viungo',
    'Alergenos': 'Vinasaba',
    'Agregar al Pedido': 'Ongeza kwa Agizo',
    'Sobre Nosotros': 'Kuhusu Sisi',
    'Contáctanos': 'Wasiliana Nasi',
    'Personal': 'Wafanyakazi',
    'Buscar idioma...': 'Tafuta lugha...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 Lugha 5 Zinazozungumzwa Zaidi',
    'idiomas disponibles': 'lugha zinazopatikana',
    'No se encontró el idioma': 'Lugha haikupatikana'
  },
  'Bengali': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'আমাদের বিভাগ',
    'Empanadas': 'এম্পানাদাস',
    'Variedades tradicionales': 'ঐতিহ্যবাহী প্রকার',
    'Pizzas': 'পিৎজা',
    'Variedades artesanales': 'হস্তশিল্প প্রকার',
    'Vinos': 'ওয়াইন',
    'Variedades premium': 'প্রিমিয়াম প্রকার',
    'Ver': 'দেখুন',
    'Descripción': 'বর্ণনা',
    'Ingredientes': 'উপাদান',
    'Alergenos': 'অ্যালার্জেন',
    'Agregar al Pedido': 'অর্ডারে যোগ করুন',
    'Sobre Nosotros': 'আমাদের সম্পর্কে',
    'Contáctanos': 'যোগাযোগ করুন',
    'Personal': 'কর্মী',
    'Buscar idioma...': 'ভাষা খুঁজুন...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 শীর্ষ ৫ সবচেয়ে বেশি কথিত ভাষা',
    'idiomas disponibles': 'উপলব্ধ ভাষা',
    'No se encontró el idioma': 'ভাষা পাওয়া যায়নি'
  },
  'Urdu': {
    'Vineria Bar': 'Vineria Bar',
    'Nuestras Categorías': 'ہماری زمرے',
    'Empanadas': 'ایمپاناداس',
    'Variedades tradicionales': 'روایتی اقسام',
    'Pizzas': 'پیزا',
    'Variedades artesanales': 'دستکاری اقسام',
    'Vinos': 'شراب',
    'Variedades premium': 'پریمیم اقسام',
    'Ver': 'دیکھیں',
    'Descripción': 'تفصیل',
    'Ingredientes': 'اجزاء',
    'Alergenos': 'الرجی',
    'Agregar al Pedido': 'آرڈر میں شامل کریں',
    'Sobre Nosotros': 'ہمارے بارے میں',
    'Contáctanos': 'رابطہ کریں',
    'Personal': 'عملہ',
    'Buscar idioma...': 'زبان تلاش کریں...',
    '🌍 Top 5 Idiomas Más Hablados': '🌍 ٹاپ 5 سب سے زیادہ بولی جانے والی زبانیں',
    'idiomas disponibles': 'دستیاب زبانیں',
    'No se encontró el idioma': 'زبان نہیں ملی'
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Español');
  const [languageSearch, setLanguageSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showFooter, setShowFooter] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [lastCartItem, setLastCartItem] = useState(null);
  const [orderModal, setOrderModal] = useState(null); // {product, table}
  const [orderStatusMessage, setOrderStatusMessage] = useState('');

  // TOP 15 Idiomas más hablados del mundo
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', native: 'English', speakers: '1.5B' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳', native: '中文', speakers: '1.1B' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', native: 'हिन्दी', speakers: '600M' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸', native: 'Español', speakers: '550M' },
    { code: 'fr', name: 'French', flag: '🇫🇷', native: 'Français', speakers: '280M' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', native: 'العربية', speakers: '274M' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩', native: 'বাংলা', speakers: '265M' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹', native: 'Português', speakers: '257M' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', native: 'Русский', speakers: '255M' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰', native: 'اردو', speakers: '230M' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩', native: 'Bahasa Indonesia', speakers: '199M' },
    { code: 'de', name: 'German', flag: '🇩🇪', native: 'Deutsch', speakers: '132M' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', native: '日本語', speakers: '125M' },
    { code: 'sw', name: 'Swahili', flag: '🇰🇪', native: 'Kiswahili', speakers: '100M' },
    { code: 'it', name: 'Italian', flag: '🇮🇹', native: 'Italiano', speakers: '85M' }
  ];

  // Filtrar idiomas según búsqueda
  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
    lang.native.toLowerCase().includes(languageSearch.toLowerCase()) ||
    lang.code.toLowerCase().includes(languageSearch.toLowerCase())
  );

  // Detectar scroll para mostrar/ocultar footer
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowFooter(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    if (Array.isArray(storedOrders)) {
      setCart(storedOrders);
    }
  }, []);

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
  };

  const addToCart = (product) => {
    setOrderModal({ product, table: '' });
  };

  const confirmOrder = () => {
    if (!orderModal.table.trim()) return;
    const tableNumber = orderModal.table.trim();

    const existingOrder = {
      id: Date.now(),
      tableNumber,
      items: [{
        name: orderModal.product.name,
        price: orderModal.product.price,
        quantity: 1
      }],
      total: orderModal.product.price,
      status: 'en-proceso',
      timestamp: Date.now()
    };

    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrders = [existingOrder, ...storedOrders];
    localStorage.setItem('orders', JSON.stringify(newOrders));

    setCart((prev) => [{...existingOrder}, ...prev]);
    setOrderModal(null);

    const msg = `⚡ ¡Sistema activado! ${orderModal.product.name} teleportado a mesa ${tableNumber}. ¡Experiencia Vineria Bar iniciada! 🚀`;
    setOrderStatusMessage(msg);
    setTimeout(() => setOrderStatusMessage(''), 6000);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('orders', '[]');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  // Función de traducción
  const t = (key) => {
    return translations[selectedLanguage]?.[key] || key;
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang.name);
    setShowLanguageMenu(false);
    setLanguageSearch('');
    localStorage.setItem('preferredLanguage', lang.name);
  };

  // Cargar idioma guardado
  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
    // Mostrar footer después de hacer scroll 300px
    setShowFooter(window.scrollY > 300);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              {/* Header */}
              <header className="header">
                <div className="header-content">
                  <h1 className="logo">{t('Vineria Bar')}</h1>
                  <div className="header-icons">
                    {/* Language Selector con Búsqueda */}
                    <div className="language-selector">
                      <button 
                        className="icon-button" 
                        onClick={() => {
                          setShowLanguageMenu(!showLanguageMenu);
                          setLanguageSearch('');
                        }}
                        aria-label={t('Buscar idioma...')}
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
                          {/* Search Input */}
                          <div className="language-search">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8" />
                              <path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                              type="text"
                              className="language-search-input"
                              placeholder={t('Buscar idioma...')}
                              value={languageSearch}
                              onChange={(e) => setLanguageSearch(e.target.value)}
                              autoFocus
                            />
                          </div>

                          {/* Top 5 Languages Label */}
                          {languageSearch === '' && (
                            <div className="language-top-label">
                              <span>{t('🌍 Top 5 Idiomas Más Hablados')}</span>
                            </div>
                          )}

                          {/* Languages List */}
                          <div className="language-list">
                            {filteredLanguages.length > 0 ? (
                              filteredLanguages.map((lang) => (
                                <button
                                  key={lang.code}
                                  className={`language-option ${selectedLanguage === lang.name ? 'active' : ''}`}
                                  onClick={() => selectLanguage(lang)}
                                >
                                  <span className="flag">{lang.flag}</span>
                                  <div className="lang-info">
                                    <span className="lang-name">{lang.native}</span>
                                    <span className="lang-trans">{lang.name}</span>
                                  </div>
                                  <span className="lang-speakers">{lang.speakers}</span>
                                  {selectedLanguage === lang.name && (
                                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  )}
                                </button>
                              ))
                            ) : (
                              <div className="no-results">
                                <p>{t('No se encontró el idioma')}</p>
                              </div>
                            )}
                          </div>

                          {/* Footer del dropdown */}
                          <div className="language-dropdown-footer">
                            <span>{filteredLanguages.length} {t('idiomas disponibles')}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </header>

              {/* Order Confirmation Banner */}
              {orderStatusMessage && (
                <div className="order-status-banner">
                  <div className="order-status-content">
                    <span>✨</span>
                    <p>{orderStatusMessage}</p>
                  </div>
                </div>
              )}

              {/* Main Content */}
              <main className="main-content">
                <h2 className="section-title">{t('Nuestras Categorías')}</h2>
                <div className="categories-container">
                  {categories.map((category) => (
                    <div 
                      key={category.id}
                      className={`category-card ${expandedCategories[category.id] ? 'expanded' : ''}`}
                    >
                      <div 
                        className="category-header"
                        onClick={() => toggleCategory(category.id)}
                      >
                        <div className="category-icon">
                          {category.icon}
                        </div>
                        <div className="category-info">
                          <h3 className="category-name">{t(category.name)}</h3>
                          <p className="category-description">{t(category.description)}</p>
                        </div>
                        <div className={`expand-icon ${expandedCategories[category.id] ? 'rotated' : ''}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      
                      {expandedCategories[category.id] && (
                        <div className="category-products">
                          <div className="products-grid">
                            {menuItems
                              .filter(item => item.categoryId === category.id)
                              .map((item) => (
                                <div 
                                  key={item.id} 
                                  className="product-card-mini"
                                  onClick={() => handleProductClick(item)}
                                >
                                  <div className="product-mini-image">
                                    <img src={item.image} alt={item.name} />
                                  </div>
                                  <div className="product-mini-content">
                                    <h4 className="product-mini-name">{item.name}</h4>
                                    <p className="product-mini-desc">{item.shortDescription}</p>
                                    <div className="product-mini-footer">
                                      <span className="product-mini-price">${item.price.toFixed(2)}</span>
                                      <button className="product-mini-btn" onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(item);
                                      }}>{t('Ver')}</button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </main>

              {/* Order Modal */}
              {orderModal && (
                <div className="order-modal-overlay">
                  <div className="order-modal kpi-pink">
                    <h3>🚀 KPI del Carrito</h3>
                    <div className="order-details">
                      <p><strong>Platillo:</strong> {orderModal.product.name}</p>
                      <p><strong>Descripción:</strong> {orderModal.product.shortDescription}</p>
                      <p><strong>Precio:</strong> ${orderModal.product.price.toFixed(2)}</p>
                      <input
                        type="text"
                        placeholder="Número de mesa"
                        value={orderModal.table}
                        onChange={(e) => setOrderModal(prev => ({ ...prev, table: e.target.value }))}
                        className="table-input"
                      />
                    </div>
                    <div className="modal-actions">
                      <button onClick={() => setOrderModal(null)} className="cancel-btn">Cancelar</button>
                      <button onClick={confirmOrder} className="confirm-btn">Comprar Ahora</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer - SIEMPRE VISIBLE ABAJO */}
              <footer className="footer-fixed">
                <div className="footer-content">
                  <Link to="/sobre-nosotros" className="footer-link">
                    <span className="footer-text">{t('Sobre Nosotros')}</span>
                  </Link>
                  <span className="footer-separator">|</span>
                  <Link to="/contactanos" className="footer-link">
                    <span className="footer-text">{t('Contáctanos')}</span>
                  </Link>
                  <span className="footer-separator">|</span>
                  <Link to="/personal" className="footer-link">
                    <button className="admin-footer-btn">
                      <svg className="admin-footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                        <line x1="12" y1="13" x2="12" y2="13" />
                        <path d="M8 11h8v6H8z" />
                      </svg>
                      <span>{t('Personal')}</span>
                    </button>
                  </Link>
                </div>
              </footer>
              {/* Product Detail Modal */}
              {selectedProduct && (
                <div className="modal-overlay" onClick={closeProductDetail}>
                  <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={closeProductDetail}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    
                    <div className="product-detail-content">
                      <div className="product-detail-image">
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <div className="image-glow"></div>
                      </div>
                      
                      <div className="product-detail-info">
                        <h2 className="product-title-static">{selectedProduct.name}</h2>
                        <p className="product-category">{selectedProduct.category}</p>
                        
                        <div className="product-description-section">
                          <h3>{t('Descripción')}</h3>
                          <p className="product-description">{selectedProduct.description}</p>
                        </div>
                        
                        {selectedProduct.ingredients && (
                          <div className="product-ingredients">
                            <h3>{t('Ingredientes')}</h3>
                            <p>{selectedProduct.ingredients}</p>
                          </div>
                        )}
                        
                        {selectedProduct.allergens && (
                          <div className="product-allergens">
                            <h3>{t('Alergenos')}</h3>
                            <p>{selectedProduct.allergens}</p>
                          </div>
                        )}
                        
                        <div className="product-footer">
                          <div className="product-price">${selectedProduct.price.toFixed(2)}</div>
                          <button className="add-to-cart-btn" onClick={() => {
                            addToCart(selectedProduct);
                            closeProductDetail();
                          }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {t('Agregar al Pedido')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          } />
          
          <Route path="/personal" element={<Personal />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;