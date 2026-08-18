export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
  rating: number;
  status: 'in-stock' | 'out-of-stock' | 'disabled';
}