import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import dummyProducts from "./dummyProducts";
import { useAppContext } from "../Context/AppContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useAppContext();

  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded shadow"
        />
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl text-green-600 font-semibold">${product.price.toFixed(2)}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-gray-700">{product.description}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-16 border rounded px-2 py-1 text-sm"
            min={1}
          />
        </div>

        <button
          className="flex items-center gap-2 bg-[#0061bd] bg-primary text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition"
          onClick={() => addToCart(product, quantity)}
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          <ul className="space-y-2">
            {product.reviews.map((review) => (
              <li key={review.id} className="text-sm text-gray-700">
                <span className="font-semibold">{review.name}:</span> {review.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
// import { useState } from "react";
// import { ShoppingCart, Star } from "lucide-react";
// import { useParams } from "react-router-dom";
// import dummyProducts from "./dummyProducts"; // Import here


// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [quantity, setQuantity] = useState(1);

//   // Find the product by id
//   const product = dummyProducts.find((p) => p.id === Number(id));

//   if (!product) {
//     return (
//       <div className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Image Section */}
//       <div>
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-auto rounded shadow"
//         />
//       </div>

//       {/* Details Section */}
//       <div className="space-y-4">
//         <h1 className="text-3xl font-bold">{product.title}</h1>
//         <p className="text-xl text-green-600 font-semibold">${product.price.toFixed(2)}</p>

//         {/* Rating */}
//         <div className="flex items-center gap-1">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               className={`h-5 w-5 ${
//                 i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         <p className="text-gray-700">{product.description}</p>
//         <p className="text-sm text-gray-500">Category: {product.category}</p>

//         {/* Quantity Selector */}
//         <div className="flex items-center gap-2">
//           <label htmlFor="quantity" className="text-sm font-medium">
//             Quantity:
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             value={quantity}
//             onChange={(e) => setQuantity(Number(e.target.value))}
//             className="w-16 border rounded px-2 py-1 text-sm"
//             min={1}
//           />
//         </div>

//         <button className="flex items-center gap-2 bg-[#0061bd] bg-primary text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition">
//           <ShoppingCart className="h-5 w-5" />
//           Add to Cart
//         </button>

//         {/* Reviews */}
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Reviews</h3>
//           <ul className="space-y-2">
//             {product.reviews.map((review) => (
//               <li key={review.id} className="text-sm text-gray-700">
//                 <span className="font-semibold">{review.name}:</span> {review.comment}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// // import React, { useState } from "react";
// // import { ShoppingCart, Star } from "lucide-react";
// // import { useParams } from "react-router-dom";
// // import dummyProducts from "./dummyProducts";
// // import { useAppContext } from "../Context/AppContext";

// // export default function ProductDetailPage() {
// //   const { id } = useParams();
// //   const [quantity, setQuantity] = useState(1);
// //   const { addToCart } = useAppContext();

// //   const product = dummyProducts.find((p) => p.id === Number(id));

// //   if (!product) {
// //     return (
// //       <div className="container mx-auto p-6">
// //         <h1 className="text-2xl font-bold">Product not found</h1>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
// //       <div>
// //         <img
// //           src={product.image}
// //           alt={product.title}
// //           className="w-full h-auto rounded shadow"
// //         />
// //       </div>
// //       <div className="space-y-4">
// //         <h1 className="text-3xl font-bold">{product.title}</h1>
// //         <p className="text-xl text-green-600 font-semibold">${product.price.toFixed(2)}</p>
// //         <div className="flex items-center gap-1">
// //           {[...Array(5)].map((_, i) => (
// //             <Star
// //               key={i}
// //               className={`h-5 w-5 ${
// //                 i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
// //               }`}
// //             />
// //           ))}
// //         </div>
// //         <p className="text-gray-700">{product.description}</p>
// //         <p className="text-sm text-gray-500">Category: {product.category}</p>
// //         <div className="flex items-center gap-2">
// //           <label htmlFor="quantity" className="text-sm font-medium">
// //             Quantity:
// //           </label>
// //           <input
// //             type="number"
// //             id="quantity"
// //             value={quantity}
// //             onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
// //             className="w-16 border rounded px-2 py-1 text-sm"
// //             min={1}
// //           />
// //         </div>
// //         <button
// //           className="flex items-center gap-2 bg-[#0061bd] text-white px-4 py-2 text-sm rounded hover:bg-primary/90 transition"
// //           onClick={() => addToCart(product, quantity)}
// //         >
// //           <ShoppingCart className="h-5 w-5" />
// //           Add to Cart
// //         </button>
// //         <div className="mt-6">
// //           <h3 className="text-lg font-semibold mb-2">Reviews</h3>
// //           <ul className="space-y-2">
// //             {product.reviews.map((review) => (
// //               <li key={review.id} className="text-sm text-gray-700">
// //                 <span className="font-semibold">{review.name}:</span> {review.comment}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }