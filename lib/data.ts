import { Collection, Menu, Page, Product } from './types';

// Sample products for Total Nutrition using actual images
export const sampleProducts: Product[] = [
  {
    id: '1',
    handle: 'collagen-b',
    title: 'Collagen B',
    description: 'Premium collagen supplement for skin health, joint support, and overall wellness.',
    featuredImage: {
      url: '/images/484807024_657064240246020_2967271769409752806_n.jpg',
      altText: 'Collagen B',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/484807024_657064240246020_2967271769409752806_n.jpg',
        altText: 'Collagen B'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '5500',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '5500',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '1',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '5500',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['collagen', 'skin health', 'joint support', 'supplements'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    handle: 'creatine-monohydrate',
    title: 'Creatine Monohydrate',
    description: 'Pure creatine monohydrate powder for enhanced strength and muscle performance.',
    featuredImage: {
      url: '/images/creatine-300.jpg',
      altText: 'Creatine Monohydrate',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/creatine-300.jpg',
        altText: 'Creatine Monohydrate'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '8800',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '8800',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '2',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '8800',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['creatine', 'strength', 'supplements'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    handle: 'multivitamin-complex',
    title: 'Multivitamin Complex',
    description: 'Complete multivitamin with essential vitamins and minerals for daily health support.',
    featuredImage: {
      url: '/images/484809857_657064306912680_8092961458543103240_n.jpg',
      altText: 'Multivitamin Complex',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/484809857_657064306912680_8092961458543103240_n.jpg',
        altText: 'Multivitamin Complex'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '3',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3000',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['multivitamin', 'vitamins', 'health', 'daily'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    handle: 'omega-3',
    title: 'Omega-3',
    description: 'High-quality omega-3 fatty acids for heart health, brain function, and overall wellness.',
    featuredImage: {
      url: '/images/484810726_657064053579372_6662141563010292967_n.jpg',
      altText: 'Omega-3',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/484810726_657064053579372_6662141563010292967_n.jpg',
        altText: 'Omega-3'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '4',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3000',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['omega-3', 'heart health', 'brain health', 'wellness'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    handle: 'bio-techusa-zmb',
    title: 'Bio TechUSA ZMB',
    description: 'Premium zinc, magnesium, and vitamin B6 supplement for enhanced recovery and performance.',
    featuredImage: {
      url: '/images/484915030_657064250246019_1566397221473840086_n.jpg',
      altText: 'Bio TechUSA ZMB',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/484915030_657064250246019_1566397221473840086_n.jpg',
        altText: 'Bio TechUSA ZMB'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3500',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3500',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '5',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3500',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['zmb', 'zinc', 'magnesium', 'vitamin b6', 'recovery'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    handle: 'omega-3-fish-oil',
    title: 'Omega-3 Fish Oil',
    description: 'High-quality fish oil supplement rich in omega-3 fatty acids for heart and brain health.',
    featuredImage: {
      url: '/images/484987320_657064300246014_6639681029468108745_n.jpg',
      altText: 'Omega-3 Fish Oil',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/484987320_657064300246014_6639681029468108745_n.jpg',
        altText: 'Omega-3 Fish Oil'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '6',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3000',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['omega-3', 'fish oil', 'heart health', 'brain health'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '7',
    handle: 'eaa-zero',
    title: 'EAA Zero',
    description: 'Essential Amino Acids supplement with zero calories for muscle recovery and growth.',
    featuredImage: {
      url: '/images/485048031_657064293579348_7373057868269793846_n.jpg',
      altText: 'EAA Zero',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/485048031_657064293579348_7373057868269793846_n.jpg',
        altText: 'EAA Zero'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '6000',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '6000',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '7',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '6000',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['eaa', 'amino acids', 'muscle recovery', 'zero calories'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '8',
    handle: 'multivitamin-for-men',
    title: 'Multivitamin for Men',
    description: 'Comprehensive multivitamin specifically formulated for men\'s health and wellness needs.',
    featuredImage: {
      url: '/images/485069630_657064313579346_8986878258442203213_n.jpg',
      altText: 'Multivitamin for Men',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/485069630_657064313579346_8986878258442203213_n.jpg',
        altText: 'Multivitamin for Men'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3500',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3500',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '8',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3500',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['multivitamin', 'mens health', 'vitamins', 'wellness'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '9',
    handle: 'creatine-100-monohydrate',
    title: 'Creatine 100% Monohydrate',
    description: 'Pure 100% creatine monohydrate powder for maximum strength gains and muscle performance.',
    featuredImage: {
      url: '/images/485172811_657064270246017_8776998884567599203_n.jpg',
      altText: 'Creatine 100% Monohydrate',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/485172811_657064270246017_8776998884567599203_n.jpg',
        altText: 'Creatine 100% Monohydrate'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '5800',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '5800',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '9',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '5800',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['creatine', '100% pure', 'strength', 'muscle performance'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '10',
    handle: 'probiotics-supplement',
    title: 'Probiotics Supplement',
    description: 'High-quality probiotic supplement with multiple strains for digestive health and immune support.',
    featuredImage: {
      url: '/images/485342662_657064183579359_2793923040497682817_n.jpg',
      altText: 'Probiotics Supplement',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/485342662_657064183579359_2793923040497682817_n.jpg',
        altText: 'Probiotics Supplement'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '10',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3000',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['probiotics', 'digestive health', 'gut health', 'immune support'],
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '11',
    handle: 'collagen-peptides',
    title: 'Collagen Peptides',
    description: 'Hydrolyzed collagen peptides for skin health, joint support, and hair strength.',
    featuredImage: {
      url: '/images/485649077_657064310246013_4413909019290929515_n.jpg',
      altText: 'Collagen Peptides',
      width: 300,
      height: 300
    },
    images: [
      {
        url: '/images/485649077_657064310246013_4413909019290929515_n.jpg',
        altText: 'Collagen Peptides'
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      },
      minVariantPrice: {
        amount: '3000',
        currencyCode: 'DZD'
      }
    },
    variants: [
      {
        id: '11',
        title: 'Default Title',
        availableForSale: true,
        selectedOptions: [],
        price: {
          amount: '3000',
          currencyCode: 'DZD'
        }
      }
    ],
    options: [],
    availableForSale: true,
    tags: ['collagen', 'skin health', 'joint support', 'hair strength'],
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

// Sample collections
export const sampleCollections: Collection[] = [
  {
    id: '1',
    handle: 'protein-supplements',
    title: 'Protein Supplements',
    description: 'High-quality protein supplements for muscle building and recovery',
    path: '/search/protein-supplements',
    products: sampleProducts.filter(p => p.tags.includes('protein'))
  },
  {
    id: '2',
    handle: 'strength-supplements',
    title: 'Strength & Performance',
    description: 'Supplements to enhance strength, endurance, and athletic performance',
    path: '/search/strength-supplements',
    products: sampleProducts.filter(p => p.tags.some(tag => ['strength', 'creatine', 'bcaa', 'pre-workout', 'endurance', 'performance'].includes(tag)))
  },
  {
    id: '3',
    handle: 'vitamins-minerals',
    title: 'Vitamins & Minerals',
    description: 'Essential vitamins and minerals for overall health and wellness',
    path: '/search/vitamins-minerals',
    products: sampleProducts.filter(p => p.tags.some(tag => ['vitamins', 'minerals', 'multivitamin', 'vitamin d3', 'magnesium', 'zinc'].includes(tag)))
  },
  {
    id: '4',
    handle: 'health-wellness',
    title: 'Health & Wellness',
    description: 'Supplements for digestive health, immune support, and overall wellness',
    path: '/search/health-wellness',
    products: sampleProducts.filter(p => p.tags.some(tag => ['health', 'wellness', 'immune support', 'digestive health', 'gut health', 'heart health', 'brain health', 'sleep', 'stress relief'].includes(tag)))
  },
  {
    id: '5',
    handle: 'beauty-skin',
    title: 'Beauty & Skin Health',
    description: 'Supplements for skin health, hair strength, and beauty from within',
    path: '/search/beauty-skin',
    products: sampleProducts.filter(p => p.tags.some(tag => ['skin health', 'hair strength', 'collagen'].includes(tag)))
  },
  {
    id: '6',
    handle: 'hidden-homepage-featured-items',
    title: 'Featured Items',
    description: 'Featured products for homepage',
    path: '/search/featured-items',
    products: sampleProducts.slice(0, 6)
  }
];

// Sample menu items
export const sampleMenus: Menu[] = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/search' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' }
];

// Sample pages
export const samplePages: Page[] = [
  {
    id: '1',
    title: 'About Us',
    handle: 'about',
    body: 'Total Nutrition is your trusted source for high-quality supplements and nutrition products.',
    bodySummary: 'Learn about Total Nutrition and our commitment to quality.',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Contact',
    handle: 'contact',
    body: 'Get in touch with us for any questions about our products.',
    bodySummary: 'Contact information and support.',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

// Simple data access functions
export function getProducts({ 
  sortKey, 
  reverse, 
  query 
}: { 
  sortKey?: string; 
  reverse?: boolean; 
  query?: string; 
} = {}): Product[] {
  let products = [...sampleProducts];
  
  // Filter by query if provided
  if (query) {
    products = products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }
  
  // Simple sorting implementation
  if (sortKey === 'PRICE') {
    products = products.sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  } else if (sortKey === 'CREATED_AT') {
    // For now, just return as is since we don't have creation dates
    products = [...products];
  }
  
  return products;
}

export function getProduct(handle: string): Product | undefined {
  return sampleProducts.find(product => product.handle === handle);
}

export function getCollections(): Collection[] {
  return sampleCollections;
}

export function getCollection(handle: string): Collection | undefined {
  return sampleCollections.find(collection => collection.handle === handle);
}

export function getCollectionProducts({ 
  collection, 
  sortKey, 
  reverse 
}: { 
  collection: string; 
  sortKey?: string; 
  reverse?: boolean; 
}): Product[] {
  const foundCollection = getCollection(collection);
  let products = foundCollection ? foundCollection.products : [];
  
  // Simple sorting implementation
  if (sortKey === 'PRICE') {
    products = [...products].sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  } else if (sortKey === 'CREATED_AT') {
    // For now, just return as is since we don't have creation dates
    products = [...products];
  }
  
  return products;
}

export function getMenu(handle: string): Menu[] {
  return sampleMenus;
}

export function getPage(handle: string): Page | undefined {
  return samplePages.find(page => page.handle === handle);
}

export function getPages(): Page[] {
  return samplePages;
}

export function getProductRecommendations(productId: string): Product[] {
  // Return other products excluding the current one
  return sampleProducts.filter(product => product.id !== productId).slice(0, 4);
}

// Simple cart functions (for now, just return empty cart)
export function getCart() {
  return Promise.resolve({
    id: 'local-cart',
    checkoutUrl: '#',
    cost: {
      subtotalAmount: { amount: '0.00', currencyCode: 'DA' },
      totalAmount: { amount: '0.00', currencyCode: 'DA' }
    },
    lines: [],
    totalQuantity: 0
  });
}
