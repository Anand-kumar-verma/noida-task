import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bookmards from "./assets/Bookmark.svg";
import shopping from "./assets/shopping-bag.svg";
import Header from "./Header";
import { subcategories, subCategorySettings } from "./rawdata";
const ProductGrid = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
    setLoading(false);
  }, []);
  if (loading)
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <span class="loader"></span>
      </div>
    );
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Header */}

      <Header cartItems={cartItems} />
      {/* Subcategories - Custom Auto Scroll */}
      <div className="border-b border-gray-800 py-4 px-2 overflow-hidden mt-[10vh]">
        <Slider {...subCategorySettings}>
          {subcategories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-1 mx-auto">
                {cat.icon}
              </div>
              <span className="text-[10px] sm:text-xs text-white whitespace-nowrap">
                {cat.label}
              </span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Title */}
      <div className="px-4 py-3 text-sm text-gray-400 border-b border-gray-800">
        Bags › Backpack
      </div>

      {/* Product Grid */}
      <div className="p-2 sm:p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-black rounded-lg overflow-hidden shadow-md relative"
          >
            <div className="bg-blue h-10 w-full absolute flex justify-end pr-2 pt-1">
              <img src={bookmards} className="w-5 h-7 text-black" />
            </div>
            <img
              onClick={() =>
                navigate("/product", {
                  state: {
                    product: product,
                    cartItems: cartItems,
                  },
                })
              }
              src={product.image}
              alt={product.title}
              className="w-full h-48 sm:h-64 object-contain p-2 sm:p-4 bg-white"
            />
            <div className="p-2 sm:p-4 bg-black">
              <h2 className="text-sm sm:text-md font-semibold truncate text-white">
                {product.title}
              </h2>
              <div className="flex lg:flex-row flex-col lg:items-center items-end justify-between mt-2">
                <p className=" font-bold mt-1 sm:mt-2 text-white">
                  ₹{(product.price * 80).toFixed(0)}{" "}
                  <span className="text-xs sm:text-sm text-gray-500 line-through ml-1 sm:ml-2">
                    ₹{(product.price * 100).toFixed(0)}
                  </span>
                  <span className="text-xs sm:text-sm  text-green-500 !text-[10px] pl-1">
                    (20% OFF)
                  </span>
                </p>
                <img
                  onClick={() =>
                    cartItems?.includes(product.id)
                      ? setCartItems(cartItems.filter((i) => i !== product.id))
                      : setCartItems([product.id, ...cartItems])
                  }
                  src={shopping}
                  alt="Bookmark"
                  className="w-4 h-4 cursor-pointer"
                  style={{
                    filter:
                      cartItems.includes(product.id) &&
                      `invert(65%) sepia(98%) saturate(239%) hue-rotate(90deg)`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
