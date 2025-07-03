import { Star, ShoppingCart } from "lucide-react"; 
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

export default function ProductGrid() {
    const { filteredProducts, addToCart } = useAppContext();

    return (
        <div className="p-1">
            <h2 className="text-2xl font-bold mb-6 text-[#002a59]">Product Listing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1 truncate">
                                <Link to={`/product/${product.id}`} className="hover:underline text-blue-600">
                                    {product.title}
                                </Link>
                            </h3>
                            <p className="text-gray-700 text-sm mb-2">${product.price.toFixed(2)}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>

                            <button
                                className="flex items-center gap-2 bg-primary bg-[#0061bd] text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition"
                                onClick={() => addToCart(product, 1)}
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
// import { Star, ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import dummyProducts from "./dummyProducts";

// export default function ProductGrid() {
//     return (
//         <div className="p-1">
//             <h2 className="text-2xl font-bold mb-6 text-[#002a59]">Product Listing</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {dummyProducts.map((product) => (
//                     <div
//                         key={product.id}
//                         className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
//                     >
//                         <img
//                             src={product.image}
//                             alt={product.title}
//                             className="w-full h-48 object-cover"
//                         />
//                         <div className="p-4">
//                             <h3 className="font-semibold text-lg mb-1 truncate">
//                                 <Link to={`/product/${product.id}`} className="hover:underline text-blue-600">
//                                     {product.title}
//                                 </Link>
//                             </h3>
//                             <p className="text-gray-700 text-sm mb-2">${product.price.toFixed(2)}</p>

//                             {/* Rating */}
//                             <div className="flex items-center gap-1 mb-3">
//                                 {[...Array(5)].map((_, i) => (
//                                     <Star
//                                         key={i}
//                                         className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//                                             }`}
//                                     />
//                                 ))}
//                             </div>

//                             <button className="flex items-center gap-2 bg-primary bg-[#0061bd] text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition">
//                                 <ShoppingCart className="h-4 w-4" />
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
        
//     );
// }



// // import React from "react";
// // import { Star, ShoppingCart } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { useAppContext } from "../Context/AppContext";

// // export default function ProductGrid() {
// //   const { filteredProducts, addToCart } = useAppContext();

// //   return (
// //     <div className="p-1">
// //       <h2 className="text-2xl font-bold mb-6 text-[#002a59]">Product Listing</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filteredProducts.map((product) => (
// //           <div
// //             key={product.id}
// //             className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
// //           >
// //             <img
// //               src={product.image}
// //               alt={product.title}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-4">
// //               <h3 className="font-semibold text-lg mb-1 truncate">
// //                 <Link to={`/product/${product.id}`} className="hover:underline text-blue-600">
// //                   {product.title}
// //                 </Link>
// //               </h3>
// //               <p className="text-gray-700 text-sm mb-2">${product.price.toFixed(2)}</p>
// //               <div className="flex items-center gap-1 mb-3">
// //                 {[...Array(5)].map((_, i) => (
// //                   <Star
// //                     key={i}
// //                     className={`h-4 w-4 ${
// //                       i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
// //                     }`}
// //                   />
// //                 ))}
// //               </div>
// //               <button
// //                 className="flex items-center gap-2 bg-[#0061bd] text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition"
// //                 onClick={() => addToCart(product, 1)}
// //               >
// //                 <ShoppingCart className="h-4 w-4" />
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import backpack from "../assets/backpack.jpg";
// import camera from "../assets/camera.jpg";
// import headphones from "../assets/headphones.jpg";
// import shoes from "../assets/shoes.jpg";
// import smartphone from "../assets/smartphone.jpg";
// import sunglasses from "../assets/sunglasses.jpg";
// import tshirt from "../assets/tshirt.jpg";
// import smartwatch from "../assets/smartwatch.jpg";

// const dummyProducts = [
//   {
//     id: 1,
//     title: "Running Shoes",
//     price: 199.99,
//     image: shoes,
//     description: "Comfortable and durable running shoes for all terrains.",
//     category: "Clothing",
//     rating: 4,
//     reviews: [
//       { id: 1, name: "Alex", comment: "Perfect for my morning runs!" },
//       { id: 2, name: "Sam", comment: "Great quality and fit." }
//     ]
//   },
//   {
//     id: 2,
//     title: "Wireless Headphones",
//     price: 89.99,
//     image: headphones,
//     description: "High-quality wireless headphones with long battery life.",
//     category: "Electronics",
//     rating: 5,
//     reviews: [
//       { id: 1, name: "John", comment: "Amazing sound clarity." },
//       { id: 2, name: "Emma", comment: "Battery lasts forever!" }
//     ]
//   },
//   {
//     id: 3,
//     title: "Backpack",
//     price: 59.99,
//     image: backpack,
//     description: "Spacious and durable backpack for daily use.",
//     category: "Accessories",
//     rating: 3,
//     reviews: []
//   },
//   {
//     id: 4,
//     title: "SmartWatch",
//     price: 199.99,
//     image: smartwatch,
//     description: "Feature-packed smartwatch for fitness and productivity.",
//     category: "Electronics",
//     rating: 4,
//     reviews: [
//       { id: 1, name: "Mike", comment: "Tracks everything I need." }
//     ]
//   },
//   {
//     id: 5,
//     title: "Sunglasses",
//     price: 89.99,
//     image: sunglasses,
//     description: "Stylish UV-protected sunglasses for everyday use.",
//     category: "Accessories",
//     rating: 5,
//     reviews: [
//       { id: 1, name: "Lily", comment: "Very stylish and light." }
//     ]
//   },
//   {
//     id: 6,
//     title: "Digital Camera",
//     price: 59.99,
//     image: camera,
//     description: "Compact digital camera perfect for beginners.",
//     category: "Electronics",
//     rating: 3,
//     reviews: []
//   },
//   {
//     id: 7,
//     title: "T-shirt",
//     price: 89.99,
//     image: tshirt,
//     description: "Comfortable cotton t-shirt for daily wear.",
//     category: "Clothing",
//     rating: 5,
//     reviews: []
//   },
//   {
//     id: 8,
//     title: "Smartphone",
//     price: 59.99,
//     image: smartphone,
//     description: "Budget-friendly smartphone with all essential features.",
//     category: "Electronics",
//     rating: 3,
//     reviews: []
//   }
// ];