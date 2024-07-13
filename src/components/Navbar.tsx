import { useState } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FaBars, FaHome, FaPlus } from "react-icons/fa";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const toggleNav = () => {
    setClick(!click);
  };

  return (
    <nav className="bg-[#1ca8b2] rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-row-reverse ">
          <div className="flex items-center">
            <div className=" flex-shrink-0">
              <Link
                to="/carts"
                className="text-white hover:text-black font-bold flex justify-center items-center gap-1"
              >
                Cart
                <FaCartShopping />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 font-semibold">
              <Link
                to="/"
                className="text-white  hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"
              >
                <FaHome />
                Home
              </Link>
              <Link
                to="/products"
                className="text-white  hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"
              >
                <BsFillBookmarkStarFill />
                Products
              </Link>
              <Link
                to="/wishlist"
                className="text-white  hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"
              >
                <FaPlus />
                Wishlist
              </Link>
              <Link
                to="/about"
                className="text-white  hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"
              >
                <FaPlus />
                About Us
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white inline-flex justify-center items-center p-2 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-xl"
              onClick={toggleNav}
            >
              {click ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {click && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-semibold">
            <Link
              to="/"
              className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"
            >
              <FaHome />
              Home
            </Link>

            <Link
              to="/products"
              className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"
            >
              <BsFillBookmarkStarFill />
              Products
            </Link>

            <Link
              to="/wishlist"
              className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"
            >
              <FaPlus />
              Wishlist
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"
            >
              <FaPlus />
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
