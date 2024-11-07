import React from "react";
import Logo from "../assets/images/prowesdIcon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-8 py-4 items-center">
      <img className="w-32" src={Logo} alt="" />
      <div>
        <ul className="list-none text-lg font-semibold flex gap-8 bg-gray-100 rounded-full px-6 py-4 drop-shadow-lg">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/products"}>
            <li>Products</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contacts</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <button
          onClick={() => navigate("/about")}
          className="bg-teal-500 rounded-full px-8 py-4 text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
