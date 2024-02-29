// import React from "react";
import { Link } from "react-router-dom";
import { zlideLogo } from "../assets";

const Navbar = () => {
  return (
    <div className="left-0 right-0 top-0  flex justify-between items-center px-[100px] py-6 bg-white">
      <img src={zlideLogo} alt="" className="w-[100px]" />
      <div className="flex items-center justify-center gap-16 text-lg">
        <Link to="/" className="text-primary">
          Home
        </Link>
        <Link to="/about" className="hover:text-primary">
          About Us
        </Link>
        <Link to="/login" className="hover:text-primary">
          Pricing
        </Link>
        <Link to="/sign-up" className="hover:text-primary">
          Help
        </Link>
      </div>
      <button className="md:py-3 py-2 md:px-12 px-6 text-white bg-blue-500 hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md">
        Try for free
      </button>
    </div>
  );
};

export default Navbar;
