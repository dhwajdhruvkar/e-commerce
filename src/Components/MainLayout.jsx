import React from "react";
import ProductGrid from "./ProductGrid";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/4 m-10">
        <Sidebar />
      </div>
      <div className="md:w-3/4 m-12">
        <ProductGrid />
      </div>
    </main>
  );
}