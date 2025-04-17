import React from "react";
import bookmard from "./assets/Bookmark (1).svg";
import cart from "./assets/cart.png";
import search from "./assets/search.svg";
import user from "./assets/user-alt.svg";
const Header = ({ cartItems }) => {
  return (
    <header className="flex flex-wrap items-center justify-between p-4 border-b border-gray-800 fixed top-0 left-0 right-0 z-10 bg-black text-white h-[10vh]">
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
        <img src={search} alt="search" className="w-5 h-5 cursor-pointer" />
        <img src={user} alt="user" className="w-4 h-4 cursor-pointer" />
        <img src={bookmard} alt="bookmard" className="w-4 h-4 cursor-pointer" />
        <div className="relative">
          <img src={cart} alt="cart" className="w-5 h-5 cursor-pointer" />

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
  );
};

export default Header;
