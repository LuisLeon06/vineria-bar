// Estructura de categorías
export const categories = [
    {
        id: 'Platos Principales',
        name: 'Platos Principales',
        subtitle: 'Para los de buen comer.',
        color: 'from-orange-900 to-orange-800',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/60451cfb-0dd4-469b-83cf-eb8d5f30e060.png'
    },
    {
        id: 'Tradicional',
        name: 'Comida Tradicional',
        subtitle: 'Nuestros platos autóctonos.',
        color: 'from-emerald-900 to-emerald-800',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/0c44adfa-a0fc-4089-a5e2-63bc6afc1cc5.png'
    },
    {
        id: 'Entradas',
        name: 'Entradas',
        subtitle: 'Para ir picando.',
        color: 'from-red-900 to-red-800',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/0d52a2ff-98a9-4b68-8097-cd04fc3d7a86.png'
    },
    {
        id: 'Postres',
        name: 'Postres',
        subtitle: 'Los mejores postres para terminar tu comida.',
        color: 'from-fuchsia-900 to-fuchsia-800',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/35feeb56-825f-461d-84e1-754687deef27.png'
    },
    {
        id: 'Bebidas',
        name: 'Bebidas',
        subtitle: 'Refrescantes, jugos naturales y más.',
        color: 'from-[var(--color-primary-dark)] to-blue-900',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop'
    }
];

// Simulated database of menu items
const menuItems = [
    {
        id: 1,
        category: 'Platos Principales',
        name: 'Milanesa Napolitana Completa',
        subtitle: 'PARA COMPARTIR',
        price: 12500,
        currency: 'ARS',
        description: 'Mega milanesa de ternera cubierta de jamón, queso, salsa de tomate y huevos fritos. Acompañada de abundantes papas fritas.',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/60451cfb-0dd4-469b-83cf-eb8d5f30e060.png',
        modelGlb: null,
        tags: [
            { text: '🥩 Carne', highlight: true },
            { text: '🍟 Papas Fritas', highlight: false }
        ]
    },
    {
        id: 2,
        category: 'Entradas',
        name: 'Empanadas Fritas',
        subtitle: 'DE CARNE',
        price: 9000,
        currency: 'ARS',
        description: 'Docena de empanadas fritas de carne cortada a cuchillo, bien jugosas y humeantes.',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/0d52a2ff-98a9-4b68-8097-cd04fc3d7a86.png',
        modelGlb: null,
        tags: [
            { text: '🥟 Fritas', highlight: true }
        ]
    },
    {
        id: 3,
        category: 'Tradicional',
        name: 'Picante de Pollo',
        subtitle: 'CLÁSICO DEL NORTE',
        price: 7500,
        currency: 'ARS',
        description: 'Trozos de pollo bañados en una rica salsa amarilla a base de ají, acompañado de arroz blanco, papa cocida y deliciosa sarsa de tomate y cebolla.',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/bd3bd362-e1c0-449e-b915-058df532e8d4.png',
        modelGlb: null,
        tags: [
            { text: '🍗 Pollo', highlight: true },
            { text: '🌶️ Picante', highlight: false }
        ]
    },
    {
        id: 4,
        category: 'Postres',
        name: 'Volcán de Chocolate',
        subtitle: 'CON HELADO',
        price: 4500,
        currency: 'ARS',
        description: 'Exquisito volcán de chocolate caliente acompañado de una generosa bocha de helado de crema americana, crema batida y salsa de frutos rojos.',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/35feeb56-825f-461d-84e1-754687deef27.png',
        modelGlb: null,
        tags: [
            { text: '🍫 Chocolate', highlight: true },
            { text: '🍦 Helado', highlight: false }
        ]
    },
    {
        id: 5,
        category: 'Tradicional',
        name: 'Locro Casero',
        subtitle: 'BIEN PULENTA',
        price: 6000,
        currency: 'ARS',
        description: 'Tradicional guiso a base de zapallo, maíz, porotos, carne de vaca, cerdo y panceta, servido en cazuela de barro con cebollita de verdeo y salsita picante.',
        image: 'https://image.qwenlm.ai/public_source/e5e35400-f77e-4a2f-ab7b-afa4cbd229d0/0c44adfa-a0fc-4089-a5e2-63bc6afc1cc5.png',
        modelGlb: null,
        tags: [
            { text: '🍲 Cazuela', highlight: true },
            { text: '🤤 100% Argentino', highlight: false }
        ]
    },
    {
        id: 6,
        category: 'Bebidas',
        name: 'Limonada de Jengibre',
        subtitle: 'REFRESCANTE',
        price: 2000,
        currency: 'ARS',
        description: 'Limonada natural exprimida en el momento con un toque de jengibre y menta fresca.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
        modelGlb: null,
        tags: [
            { text: '🍋 Limón natural', highlight: true },
            { text: '🌿 Menta', highlight: false }
        ]
    }
];

// Fake API call with artificial delay
export const fetchMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ categories, menuItems });
        }, 1500); // 1.5 second simulated loading time
    });
};

