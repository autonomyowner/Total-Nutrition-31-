// Simple types for local commerce without Shopify

export interface Image {
  url: string;
  altText: string;
  width?: number;
  height?: number;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  featuredImage: Image;
  images: Image[];
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: ProductVariant[];
  options: ProductOption[];
  availableForSale: boolean;
  tags: string[];
  seo?: {
    title?: string;
    description?: string;
  };
  updatedAt: string;
  createdAt?: string;
  salesRank?: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  path: string;
  image?: Image;
  products: Product[];
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface Menu {
  title: string;
  path: string;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount?: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: CartItem[];
  totalQuantity: number;
}

export interface CartItem {
  id: string;
  quantity: number;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
    product: Product;
  };
}

export interface Page {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}
