import axios from "axios";
import React, { useEffect, useState } from "react";
import bookmard from "./assets/Bookmark (1).svg";
import bookmards from "./assets/Bookmark.svg";
import search from "./assets/search.svg";
import shopping from "./assets/shopping-bag.svg";
import cart from "./assets/cart.png";
import user from "./assets/user-alt.svg";
import { subcategories, subCategorySettings } from "./rawdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
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
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between p-4 border-b border-gray-800">
        <div className="text-xl font-bold tracking-widest">TANN TRIM</div>
        <nav className="hidden md:flex gap-6 text-sm mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300">
            Bag
          </a>
          <a href="#" className="hover:text-gray-300">
            Travel
          </a>
          <a href="#" className="hover:text-gray-300">
            Accessories
          </a>
          <a href="#" className="hover:text-gray-300">
            Gifting
          </a>
          <a href="#" className="hover:text-gray-300">
            Jewelery
          </a>
        </nav>
        <div className="grid grid-cols-4 place-items-center gap-4 mt-2 md:mt-0 mr-4">
          <img src={search} className="w-5 h-5 cursor-pointer" />
          <img src={user} className="w-4 h-4 cursor-pointer" />
          <img src={bookmard} className="w-4 h-4 cursor-pointer" />
          <div className="relative">
            <img src={cart} className="w-5 h-5 cursor-pointer" />

            {cartItems?.length > 0 && (
              <span className="!bg-pink-500 absolute -top-1 -right-1 rounded-full px-1 text-[10px]">
                {cartItems?.length || 0}
              </span>
            )}
          </div>
          {/* <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Menu className="w-5 h-5 cursor-pointer" /> */}
        </div>
      </header>

      {/* Subcategories - Custom Auto Scroll */}
      <div className="border-b border-gray-800 py-4 px-2 overflow-hidden">
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
