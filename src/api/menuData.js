export const categories = [
  {
    id: 'empanadas',
    name: 'Empanadas',
    description: 'Variedades tradicionales',
    icon: '🥟',
    image: '/images/empanadas.jpg'
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    description: 'Variedades artesanales',
    icon: '🍕',
    image: '/images/pizzas.jpg'
  },
  {
    id: 'vinos',
    name: 'Vinos',
    description: 'Variedades premium',
    icon: '🍷',
    image: '/images/vinos.jpg'
  }
];

export const menuItems = [
  // EMPANADAS
  {
    id: 1,
    categoryId: 'empanadas',
    name: 'Empanada de Carne',
    shortDescription: 'Carne cortada a cuchillo',
    description: 'Deliciosa empanada de carne vacuna cortada a cuchillo con cebolla de verdeo, comino y pimentón. Masa casera crocante cocinada al horno de barro.',
    price: 3.50,
    image: '/images/empanada-carne.jpg',
    category: 'Empanadas',
    ingredients: 'Carne vacuna, cebolla, cebolla de verdeo, comino, pimentón',
    allergens: 'Contiene gluten'
  },
  {
    id: 2,
    categoryId: 'empanadas',
    name: 'Empanada de Jamón y Queso',
    shortDescription: 'Rellena de jamón y muzzarella',
    description: 'Empanada rellena de jamón cocido y queso muzzarella. Ideal para los amantes del queso derretido. Cocinada al horno hasta dorar.',
    price: 3.00,
    image: '/images/empanada-jamon-queso.jpg',
    category: 'Empanadas',
    ingredients: 'Jamón cocido, queso muzzarella, masa',
    allergens: 'Contiene gluten, lácteos'
  },
  {
    id: 3,
    categoryId: 'empanadas',
    name: 'Empanada de Pollo',
    shortDescription: 'Pollo desmenuzado',
    description: 'Empanada de pollo desmenuzado con verduras y especias. Una opción más ligera pero igualmente sabrosa.',
    price: 3.00,
    image: '/images/empanada-pollo.jpg',
    category: 'Empanadas',
    ingredients: 'Pollo, cebolla, pimiento, especias',
    allergens: 'Contiene gluten'
  },
  {
    id: 4,
    categoryId: 'empanadas',
    name: 'Empanada de Humita',
    shortDescription: 'Choclo cremoso',
    description: 'Empanada de humita con choclo cremoso, cebolla y un toque de albahaca. Una delicia vegetariana.',
    price: 2.80,
    image: '/images/empanada-humita.jpg',
    category: 'Empanadas',
    ingredients: 'Choclo, cebolla, albahaca, queso',
    allergens: 'Contiene gluten, lácteos'
  },
  
  // PIZZAS
  {
    id: 5,
    categoryId: 'pizzas',
    name: 'Pizza Muzzarella',
    shortDescription: 'Clásica argentina',
    description: 'Pizza muzzarella tradicional con salsa de tomate, abundante queso muzzarella, orégano y aceitunas. Masa fina y crocante.',
    price: 18.00,
    image: '/images/pizza-muzzarella.jpg',
    category: 'Pizzas',
    ingredients: 'Masa, salsa de tomate, muzzarella, orégano, aceitunas',
    allergens: 'Contiene gluten, lácteos'
  },
  {
    id: 6,
    categoryId: 'pizzas',
    name: 'Pizza Napolitana',
    shortDescription: 'Con tomate y ajo',
    description: 'Pizza napolitana con rodajas de tomate fresco, ajo, orégano y queso muzzarella. Un clásico de las pizzerías argentinas.',
    price: 19.00,
    image: '/images/pizza-napolitana.jpg',
    category: 'Pizzas',
    ingredients: 'Masa, muzzarella, tomate, ajo, orégano',
    allergens: 'Contiene gluten, lácteos'
  },
  {
    id: 7,
    categoryId: 'pizzas',
    name: 'Pizza Especial',
    shortDescription: 'Completa',
    description: 'Pizza especial con muzzarella, jamón, morrón, aceitunas, huevo y cebolla. La más completa del menú.',
    price: 22.00,
    image: '/images/pizza-especial.jpg',
    category: 'Pizzas',
    ingredients: 'Masa, muzzarella, jamón, morrón, aceitunas, huevo, cebolla',
    allergens: 'Contiene gluten, lácteos, huevo'
  },
  {
    id: 8,
    categoryId: 'pizzas',
    name: 'Pizza Fugazza',
    shortDescription: 'Con cebolla',
    description: 'Pizza fugazza con abundante cebolla caramelizada, orégano y queso muzzarella. Una especialidad de la casa.',
    price: 20.00,
    image: '/images/pizza-fugazza.jpg',
    category: 'Pizzas',
    ingredients: 'Masa, muzzarella, cebolla, orégano',
    allergens: 'Contiene gluten, lácteos'
  },
  
  // VINOS
  {
    id: 9,
    categoryId: 'vinos',
    name: 'Malbec Reserva',
    shortDescription: 'Bodega Catena Zapata',
    description: 'Vino tinto de alta gama con notas de frutos rojos maduros, vainilla y especias. Cuerpo completo, taninos suaves y final prolongado.',
    price: 35.00,
    image: '/images/malbec-reserva.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Malbec 100%',
    allergens: 'Contiene sulfitos'
  },
  {
    id: 10,
    categoryId: 'vinos',
    name: 'Chardonnay',
    shortDescription: 'Bodega Trapiche',
    description: 'Vino blanco fresco y elegante con aromas a manzana verde, pera y notas cítricas. Paso en boca sedoso con acidez equilibrada.',
    price: 28.00,
    image: '/images/chardonnay.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Chardonnay 100%',
    allergens: 'Contiene sulfitos'
  },
  {
    id: 11,
    categoryId: 'vinos',
    name: 'Cabernet Sauvignon',
    shortDescription: 'Bodega Luigi Bosca',
    description: 'Vino tinto intenso con aromas a cassis, moras y pimiento morrón. Estructurado, con taninos firmes y excelente potencial de guarda.',
    price: 32.00,
    image: '/images/cabernet.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Cabernet Sauvignon 100%',
    allergens: 'Contiene sulfitos'
  },
  {
    id: 12,
    categoryId: 'vinos',
    name: 'Rosé de Pinot Noir',
    shortDescription: 'Bodega Zuccardi',
    description: 'Vino rosado delicado con notas a frutillas, frambuesas y flores blancas. Fresco, ligero y muy fácil de beber.',
    price: 25.00,
    image: '/images/rose.jpg',
    category: 'Vinos',
    ingredients: 'Uvas Pinot Noir 100%',
    allergens: 'Contiene sulfitos'
  }
];
