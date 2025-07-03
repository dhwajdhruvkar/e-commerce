// Import your images at the top of the file
import shoes from '../assets/shoes.jpg';
import headphones from '../assets/headphones.jpg';
import backpack from '../assets/backpack.jpg';
import smartwatch from '../assets/smartwatch.jpg';
import sunglasses from '../assets/sunglasses.jpg';
import camera from '../assets/camera.jpg'; // Ensure '../../assets/camera.jpg' exists and is correctly named
import tshirt from '../assets/tshirt.jpg';
import smartphone from '../assets/smartphone.jpg';

const dummyProducts = [
  {
    id: 1,
    title: "Running Shoes",
    price: 199.99,
    image: shoes,
    description: "Comfortable and durable running shoes for all terrains.",
    category: "Clothing",
    rating: 4,
    reviews: [
      { id: 1, name: "Alex", comment: "Perfect for my morning runs!" },
      { id: 2, name: "Sam", comment: "Great quality and fit." }
    ]
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 89.99,
    image: headphones,
    description: "High-quality wireless headphones with long battery life.",
    category: "Electronics",
    rating: 5,
    reviews: [
      { id: 1, name: "John", comment: "Amazing sound clarity." },
      { id: 2, name: "Emma", comment: "Battery lasts forever!" }
    ]
  },
  {
    id: 3,
    title: "Backpack",
    price: 59.99,
    image: backpack,
    description: "Spacious and durable backpack for daily use.",
    category: "Accessories",
    rating: 3,
    reviews: []
  },
  {
    id: 4,
    title: "SmartWatch",
    price: 199.99,
    image: smartwatch,
    description: "Feature-packed smartwatch for fitness and productivity.",
    category: "Electronics",
    rating: 4,
    reviews: [
      { id: 1, name: "Mike", comment: "Tracks everything I need." }
    ]
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 89.99,
    image: sunglasses,
    description: "Stylish UV-protected sunglasses for everyday use.",
    category: "Accessories",
    rating: 5,
    reviews: [
      { id: 1, name: "Lily", comment: "Very stylish and light." }
    ]
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 59.99,
    image: camera,
    description: "Compact digital camera perfect for beginners.",
    category: "Electronics",
    rating: 3,
    reviews: []
  },
  {
    id: 7,
    title: "T-shirt",
    price: 89.99,
    image: tshirt,
    description: "Comfortable cotton t-shirt for daily wear.",
    category: "Clothing",
    rating: 5,
    reviews: []
  },
  {
    id: 8,
    title: "Smartphone",
    price: 59.99,
    image: smartphone,
    description: "Budget-friendly smartphone with all essential features.",
    category: "Electronics",
    rating: 3,
    reviews: []
  }
];

export default dummyProducts;
