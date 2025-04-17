import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product || {};
  const cartItems = location.state?.cartItems || {};

  return (
    <>
      <Header cartItems={cartItems} />
      <div className="bg-black text-white min-h-screen p-4 sm:p-8 mt-[10vh]">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          {product.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-[80%] max-h-[400px] object-contain bg-white p-6 rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-green-400 text-xl font-bold">
                ₹{(product.price * 80).toFixed(0)}
              </span>
              <span className="text-gray-500 line-through">
                ₹{(product.price * 100).toFixed(0)}
              </span>
              <span className="text-green-500 text-sm">(20% OFF)</span>
            </div>

            <button className="mt-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
