export const categories = [
  {
    id: 'vinos',
    name: 'Vinos',
    description: 'Selección premium de vinos',
    icon: '🍷',
    image: '/images/vinos.jpg'
  },
  {
    id: 'tablas',
    name: 'Tablas',
    description: 'Tablas de quesos y fiambres',
    icon: '🧀',
    image: '/images/tablas.jpg'
  },
  {
    id: 'picadas',
    name: 'Picadas',
    description: 'Para compartir',
    icon: '🍢',
    image: '/images/picadas.jpg'
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    description: 'Tragos y bebidas',
    icon: '🍸',
    image: '/images/bebidas.jpg'
  }
];

export const menuItems = [
  // Vinos
  {
    id: 1,
    categoryId: 'vinos',
    name: 'Malbec Reserva',
    shortDescription: 'Bodega Catena Zapata',
    description: 'Vino tinto de alta gama con notas de frutos rojos maduros, vainilla y especias. Cuerpo completo, taninos suaves y final prolongado. Perfecto para acompañar carnes rojas y quesos duros.',
    price: 35.00,
    image: '/images/malbec-reserva.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Malbec 100%',
    allergens: 'Contiene sulfitos'
  },
  {
    id: 2,
    categoryId: 'vinos',
    name: 'Chardonnay',
    shortDescription: 'Bodega Trapiche',
    description: 'Vino blanco fresco y elegante con aromas a manzana verde, pera y notas cítricas. Paso en boca sedoso con acidez equilibrada. Ideal para maridar con pescados y mariscos.',
    price: 28.00,
    image: '/images/chardonnay.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Chardonnay 100%',
    allergens: 'Contiene sulfitos'
  },
  {
    id: 3,
    categoryId: 'vinos',
    name: 'Cabernet Sauvignon',
    shortDescription: 'Bodega Luigi Bosca',
    description: 'Vino tinto intenso con aromas a cassis, moras y pimiento morrón. Estructurado, con taninos firmes y excelente potencial de guarda. Marida perfectamente con carnes a la parrilla.',
    price: 32.00,
    image: '/images/cabernet.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Cabernet Sauvignon 100%',
    allergens: 'Contiene sulfitos'
  },
  {
    id: 4,
    categoryId: 'vinos',
    name: 'Rosé de Pinot Noir',
    shortDescription: 'Bodega Zuccardi',
    description: 'Vino rosado delicado con notas a frutillas, frambuesas y flores blancas. Fresco, ligero y muy fácil de beber. Perfecto para aperitivos y días soleados.',
    price: 25.00,
    image: '/images/rose.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Pinot Noir 100%',
    allergens: 'Contiene sulfitos'
  },
  
  // Tablas
  {
    id: 5,
    categoryId: 'tablas',
    name: 'Tabla de Quesos',
    shortDescription: 'Selección nacional',
    description: 'Exquisita selección de quesos argentinos: Brie, Roquefort, Provolone, Tybo y Semicurado. Acompañados de frutos secos, miel, frutas desecadas y crackers artesanales. Para 2 personas.',
    price: 32.00,
    image: '/images/tabla-quesos.jpg',
    category: 'Tablas',
    ingredients: 'Quesos variados, frutos secos, miel, frutas desecadas, crackers',
    allergens: 'Lácteos, gluten, frutos secos'
  },
  {
    id: 6,
    categoryId: 'tablas',
    name: 'Tabla de Fiambres',
    shortDescription: 'Productos importados',
    description: 'Selección de fiambres y embutidos: Salame, Prosciutto, Bondiola, Mortadela con pistachos. Acompañados de aceitunas, pickles, mostaza Dijon y pan casero. Para 2 personas.',
    price: 30.00,
    image: '/images/tabla-fiambres.jpg',
    category: 'Tablas',
    ingredients: 'Fiambres variados, aceitunas, pickles, mostaza, pan',
    allergens: 'Gluten, mostaza'
  },
  {
    id: 7,
    categoryId: 'tablas',
    name: 'Tabla Mixta Grande',
    shortDescription: 'Para compartir',
    description: 'Combinación perfecta de quesos y fiambres seleccionados. Incluye Brie, Roquefort, Salame, Prosciutto, frutos secos, miel, aceitunas, crackers y pan. Ideal para 4 personas.',
    price: 55.00,
    image: '/images/tabla-mixta.jpg',
    category: 'Tablas',
    ingredients: 'Quesos, fiambres, frutos secos, miel, aceitunas, crackers, pan',
    allergens: 'Lácteos, gluten, frutos secos, mostaza'
  },
  
  // Picadas
  {
    id: 8,
    categoryId: 'picadas',
    name: 'Picada Clásica',
    shortDescription: 'Tradicional argentina',
    description: 'Picada tradicional con maní, papas fritas, palitos salados, aceitunas, queso en cubos, salame y crackers. Perfecta para acompañar con cerveza o vino. Para 3-4 personas.',
    price: 22.00,
    image: '/images/picada-clasica.jpg',
    category: 'Picadas',
    ingredients: 'Maní, papas, palitos, aceitunas, queso, salame, crackers',
    allergens: 'Gluten, lácteos, frutos secos'
  },
  {
    id: 9,
    categoryId: 'picadas',
    name: 'Papas Rústicas',
    shortDescription: 'Con salsas',
    description: 'Papas rústicas cortadas a mano y fritas hasta dorar. Acompañadas de salsa de queso cheddar, bacon crocante, cebolla de verdeo y sour cream. Irresistibles!',
    price: 16.00,
    image: '/images/papas-rusticas.jpg',
    category: 'Picadas',
    ingredients: 'Papas, cheddar, bacon, cebolla de verdeo, sour cream',
    allergens: 'Lácteos'
  },
  {
    id: 10,
    categoryId: 'picadas',
    name: 'Nachos Supreme',
    shortDescription: 'Con toppings',
    description: 'Nachos de maíz crocantes cubiertos con salsa de queso cheddar, jalapeños, guacamole, pico de gallo, sour cream y carne molida. Para compartir.',
    price: 18.00,
    image: '/images/nachos.jpg',
    category: 'Picadas',
    ingredients: 'Nachos, cheddar, jalapeños, guacamole, tomate, carne',
    allergens: 'Lácteos'
  },
  
  // Bebidas
  {
    id: 11,
    categoryId: 'bebidas',
    name: 'Fernet con Coca',
    shortDescription: 'Clásico argentino',
    description: 'El trago más popular de Argentina. Fernet Branca con Coca-Cola y mucho hielo. Servido en vaso largo con rodaja de limón. Inconfundible y refrescante.',
    price: 12.00,
    image: '/images/fernet.jpg',
    category: 'Bebidas',
    ingredients: 'Fernet Branca, Coca-Cola, limón, hielo',
    allergens: 'Sin gluten'
  },
  {
    id: 12,
    categoryId: 'bebidas',
    name: 'Mojito Clásico',
    shortDescription: 'Cocktail cubano',
    description: 'Refrescante cocktail cubano con ron blanco, hierbabuena fresca, limón, azúcar y soda. Preparado tradicionalmente en mortero. Perfecto para el verano.',
    price: 14.00,
    image: '/images/mojito.jpg',
    category: 'Bebidas',
    ingredients: 'Ron blanco, hierbabuena, limón, azúcar, soda',
    allergens: 'Sin gluten'
  },
  {
    id: 13,
    categoryId: 'bebidas',
    name: 'Cerveza Artesanal',
    shortDescription: '500ml - Rubia/Negra',
    description: 'Cerveza artesanal local elaborada con ingredientes premium. Disponible en versión Rubia (IPA) o Negra (Stout). Espuma cremosa y sabor intenso. 500ml.',
    price: 10.00,
    image: '/images/cerveza.jpg',
    category: 'Bebidas',
    ingredients: 'Agua, malta de cebada, lúpulo, levadura',
    allergens: 'Contiene gluten'
  },
  {
    id: 14,
    categoryId: 'bebidas',
    name: 'Gin Tonic Premium',
    shortDescription: 'Con tónica premium',
    description: 'Gin tonic elaborado con ginebra premium, tónica artesanal y guarnición de frutas y especias a elección (pomelo, limón, jengibre, romero). Servido en copa de balón.',
    price: 15.00,
    image: '/images/gintonic.jpg',
    category: 'Bebidas',
    ingredients: 'Ginebra, tónica, frutas, especias',
    allergens: 'Sin gluten'
  }
];
