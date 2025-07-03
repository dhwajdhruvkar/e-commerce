import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

/**
 * Navbar component
 * Uses global cartCount and search query navigation
 */
export default function Navbar() {
  const { cartCount } = useAppContext();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="w-full shadow-sm bg-[#0758a7]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-medium tracking-tight select-none">
          Logo
        </Link>

        {/* Search Bar – hidden on very small screens */}
        <form
          onSubmit={handleSubmit}
          className="hidden sm:flex flex-1 max-w-lg mx-4"
        >
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <div className="relative w-full">
            <input
              id="search"
              type="text"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-4 hover:opacity-80 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Right‑side icons */}
        <div className="flex items-center gap-6 bg">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:opacity-80 focus:outline-none border border-gray-300 p-2 rounded-full"
            aria-label="Cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

// import { ShoppingCart } from "lucide-react";
// import { useState } from "react";

// /**
//  * Navbar component
//  * Props:
//  *   cartCount (number): items in the cart – defaults to 0
//  */
// export default function Navbar({ cartCount = 0 }) {
//     const [query, setQuery] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // TODO: hook into your search logic or router here
//         console.log("Searching for:", query);
//     };

//     return (
//         <header className="w-full shadow-sm bg-[#0758a7]">
//             <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-4 text-white">
//                 {/* Logo */}
//                 <a href="/" className="text-2xl font-medium tracking-tight select-none">
//                     Logo
//                 </a>

//                 {/* Search Bar – hidden on very small screens */}
//                 <form
//                     onSubmit={handleSubmit}
//                     className="hidden sm:flex flex-1 max-w-lg mx-4"
//                 >
//                     <label htmlFor="search" className="sr-only">
//                         Search products
//                     </label>
//                     <div className="relative w-full">
//                         <input
//                             id="search"
//                             type="text"
//                             autoComplete="off"
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             placeholder="Search products..."
//                             className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none"
//                         />
//                         <button
//                             type="submit"
//                             className="absolute inset-y-0 right-0 flex items-center pr-4 hover:opacity-80 focus:outline-none"
//                         >
//                             {/* Search icon SVG (inline to avoid extra deps) */}
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </form>

//                 {/* Right‑side icons */}
//                 <div className="flex items-center gap-6 bg">
//                     {/* Cart */}
//                     <button
//                         type="button"
//                         className="relative hover:opacity-80 focus:outline-none border border-gray-300 p-2 rounded-full"
//                         aria-label="Cart"
//                     >
//                         <ShoppingCart className="h-6 w-6" />
//                         {cartCount > 0 && (
//                             <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-white">
//                                 {cartCount}
//                             </span>
//                         )}
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }

// // import React from "react";
// // import { ShoppingCart } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { useAppContext } from "../Context/AppContext";

// // export default function Navbar() {
// //   const { cartCount } = useAppContext();

// //   return (
// //     <nav className="bg-[#0061bd] text-white px-6 py-4 flex items-center justify-between">
// //       <Link to="/" className="text-2xl font-bold tracking-tight">
// //         WhatByte
// //       </Link>
// //       <div className="flex items-center gap-6">
// //         <Link to="/" className="hover:underline">
// //           Home
// //         </Link>
// //         <Link to="/cart" className="relative flex items-center hover:underline">
// //           <ShoppingCart className="h-6 w-6" />
// //           {cartCount > 0 && (
// //             <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2 py-0.5">
// //               {cartCount}
// //             </span>
// //           )}
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // }
