export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Elegance' | 'Sport' | 'Minimalist';
  price: number;
  image: string;
  dialColor: string;
  caseSize: string;
  strap: string;
  description: string;
}

export type ProductCategoryFilter = 'All' | Product['category'];

export interface CartItem {
  product: Product;
  quantity: number;
}