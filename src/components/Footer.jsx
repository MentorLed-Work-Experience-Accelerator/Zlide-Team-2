// import React from 'react'
import { Facebook, Linkedin, Twitter, instagram, zlide } from '../assets';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className="bg-black w-full p-40 py-10">
      <div className="flex justify-between pt-20">
        <div className=" text-lg">
          <img src={zlide} alt="zlide-logo" />
          <br />
          <Link to="/" className="mr-10 text-white">
            Home
          </Link>
          <Link to="/about" className="mr-10 text-white">
            About Us
          </Link>
          <Link to="/login" className="mr-10 text-white">
            Pricing
          </Link>
          <Link to="/sign-up" className="text-white">
            Help
          </Link>
        </div>
        <div className="flex gap-5 h-10 ">
          <img src={Linkedin} alt="logo" />
          <img src={Facebook} alt="logo" />
          <img src={Twitter} alt="logo" />
          <img src={instagram} alt="logo" />
        </div>
      </div>
      <div className="flex justify-between items-end mt-40">
        <p className="text-white">© 2024 Zlide. All rights reserved.</p>
        <div>
          <span className="text-white mr-10">Terms</span>
          <span className="text-white mr-10">Privacy</span>
          <span className="text-white">Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
