import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 299,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'AudioTech',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    price: 199,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'FitTech',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    title: 'Professional Camera',
    price: 1299,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'PhotoPro',
    description: 'Professional DSLR camera with advanced features for photography enthusiasts.',
    rating: 4.9,
    reviews: 67
  },
  {
    id: '4',
    title: 'Casual Cotton T-Shirt',
    price: 29,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    brand: 'ComfortWear',
    description: 'Comfortable cotton t-shirt perfect for everyday wear.',
    rating: 4.3,
    reviews: 156
  },
  {
    id: '5',
    title: 'Designer Sunglasses',
    price: 149,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    brand: 'StyleVision',
    description: 'Stylish designer sunglasses with UV protection.',
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    title: 'Premium Backpack',
    price: 89,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    brand: 'TravelGear',
    description: 'Durable backpack with multiple compartments for travel and work.',
    rating: 4.7,
    reviews: 92
  },
  {
    id: '7',
    title: 'Running Shoes',
    price: 129,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Footwear',
    brand: 'SportMax',
    description: 'Comfortable running shoes with advanced cushioning technology.',
    rating: 4.4,
    reviews: 203
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'TechMobile',
    description: 'Latest smartphone with advanced camera and long battery life.',
    rating: 4.6,
    reviews: 145
  },
  {
    id: '9',
    title: 'Leather Jacket',
    price: 249,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    brand: 'LeatherCraft',
    description: 'Premium leather jacket with classic design and superior quality.',
    rating: 4.8,
    reviews: 56
  },
  {
    id: '10',
    title: 'Wireless Speaker',
    price: 79,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'SoundWave',
    description: 'Portable wireless speaker with excellent sound quality and long battery life.',
    rating: 4.2,
    reviews: 134
  }
];

export const categories = ['Electronics', 'Clothing', 'Accessories', 'Footwear'];
export const brands = ['AudioTech', 'FitTech', 'PhotoPro', 'ComfortWear', 'StyleVision', 'TravelGear', 'SportMax', 'TechMobile', 'LeatherCraft', 'SoundWave'];