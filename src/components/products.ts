import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSocks, faGlasses, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  icon: IconDefinition;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Comfort Slippers",
    image: "https://via.placeholder.com/150",
    price: 19.99,
    description: "Soft, non-slip slippers for everyday comfort.",
    category: "Personal Care",
    icon: faSocks
  },
  {
    id: 2,
    name: "Reading Glasses",
    image: "https://via.placeholder.com/150",
    price: 29.99,
    description: "Durable, stylish reading glasses.",
    category: "Personal Care",
    icon: faGlasses
  },
  {
    id: 3,
    name: "Puzzle Book",
    image: "https://via.placeholder.com/150",
    price: 9.99,
    description: "Keep your mind sharp with fun puzzles.",
    category: "Personal Care",
    icon: faPuzzlePiece
  }
  // Add more products as needed
]; 