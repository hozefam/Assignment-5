export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  owner: string;
  color: string;
  quantity: number;
  inStock: 'Yes' | 'No';
}
