export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  owner: string;
  color: string;
  quantity: number;
  inStock: 'Yes' | 'No';
}
