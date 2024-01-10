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
