import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXmark, FaBars, FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <>
      <div className="w-full px-16 py-2 bg-themeYellow lg:flex hidden justify-between items-center gap-6">
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
          <FaPhoneVolume className="size-[18px]" />
          <span>+91 890 929 0192</span>
        </h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
          <FaMapMarkerAlt className="size-[18px]" />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
          <FaPhoneVolume className="size-[18px]" />
          <span>electrashop@company.com</span>
        </h1>
      </div>
      <nav className="w-full bg-gray-100 flex justify-between items-center gap-10 lg:px-16 px-5 sticky top-0 z-50">
        <h1 className="text-themePurple font-bold lg:text-[30px] text-3xl ">
          Electra Shop
        </h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themePurple hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
        <div
          id="header-icons"
          className="lg:flex hidden justify-center items-center gap-6 text-black"
        >
          <FaSearch className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themePurple" />
          <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themePurple" />
          <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themePurple" />
          <div className="relative">
            <FaShoppingCart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themePurple" />
            <div className="bg-themePurple hover:bg-themeYellow px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold">
              2
            </div>
          </div>
        </div>
        {/* Mobile menu starts here*/}
        <div
          className="flex justify-center items-center lg:hidden mt-3"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-themePurple text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-themePurple text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
