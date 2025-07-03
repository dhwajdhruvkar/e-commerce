import { useAppContext } from "../Context/AppContext";
import dummyProducts from "./dummyProducts";
import { useState } from "react";

export default function Sidebar() {
  const { selectedCategory, setSelectedCategory } = useAppContext();
  const [priceRange, setPriceRange] = useState(50);

  const categories = [
    "All",
    ...Array.from(new Set(dummyProducts.map((p) => p.category))),
  ];

  return (
    <aside className="w-full md:w-64 p-4 rounded-xl space-y-6 bg-[#0758a7] text-white">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-full border transition ${
                selectedCategory === category
                  ? 'bg-primary text-white border-primary'
                  : 'bg-gray-100 text-gray-700 border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
        <div className="text-sm text-white mt-1">Up to {priceRange}</div>
      </div>
    </aside>
  );
}


// import { useState } from "react";

// export default function Sidebar() {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [priceRange, setPriceRange] = useState(50);

//   const toggleCategory = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   return (
//     <aside className="w-full md:w-64 p-4 rounded-xl space-y-6 bg-[#0758a7] text-white">
//       <h2 className="text-xl font-bold mb-4">Filters</h2>

//       {/* Category Filter */}
//       <div>
//         <h3 className="font-semibold mb-2">Category</h3>
//         <div className="flex flex-wrap gap-2">
//           {['All', 'Electronics', 'Clothing', 'Home'].map((category) => (
//             <button
//               key={category}
//               onClick={() => toggleCategory(category)}
//               className={`px-3 py-1 text-sm rounded-full border transition ${
//                 selectedCategories.includes(category)
//                   ? 'bg-primary text-white border-primary'
//                   : 'bg-gray-100 text-gray-700 border-gray-300'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Price Range Slider */}
//       <div>
//         <h3 className="font-semibold mb-2">Price Range</h3>
//         <input
//           type="range"
//           min="0"
//           max="1000"
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//           className="w-full"
//         />
//         <div className="text-sm text-white mt-1">Up to {priceRange}</div>
//       </div>
//     </aside>
//   );
// }

// // import React from "react";
// // import { useAppContext } from "../Context/AppContext";
// // import dummyProducts from "./dummyProducts";

// // export default function Sidebar() {
// //   const { selectedCategory, setSelectedCategory } = useAppContext();

// //   // Get unique categories
// //   const categories = [
// //     "All",
// //     ...Array.from(new Set(dummyProducts.map((p) => p.category))),
// //   ];

// //   return (
// //     <aside>
// //       <h2 className="text-xl font-semibold mb-4 text-[#002a59]">Categories</h2>
// //       <ul className="space-y-2">
// //         {categories.map((cat) => (
// //           <li key={cat}>
// //             <button
// //               className={`w-full text-left px-3 py-2 rounded ${
// //                 selectedCategory === cat
// //                   ? "bg-[#0061bd] text-white"
// //                   : "hover:bg-blue-100"
// //               }`}
// //               onClick={() => setSelectedCategory(cat)}
// //             >
// //               {cat}
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </aside>
// //   );
// // }