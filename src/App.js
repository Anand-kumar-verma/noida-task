import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductGrid />} />
      <Route path="/product" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
