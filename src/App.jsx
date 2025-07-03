import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MainLayout from "./Components/MainLayout";
import ProductDetailPage from "./Components/ProductDetailPage";
import { AppProvider } from "./Context/AppContext";
import CartPage from "./Components/CartPage";

const App = () => (
  <div className="bg-[#f8fbff] min-h-screen flex flex-col">
    <AppProvider>
      <Router>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  </div>
);

export default App;