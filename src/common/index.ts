export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
  quantity: number | 1;
  stock: number;
  rating: number;
  price: number;
  discountPercentage: number;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  color: string[];
  totalReview: number;
  rating: number;
  thumbnail: string;
  size: string[];
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  thumbnail: string;
}
