export interface ProductDetails {
  id: string;
  createdAt: string;
  searchCount: number;
  sku: string;
  brand: string;
  model: string;
  capacity: string;
  color: string;
  price: number;
  currency: string;
  length?: number; // to get length of array
}
