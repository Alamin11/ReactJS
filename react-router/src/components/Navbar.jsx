import React from "react";
import Logo from "../assets/images/prowesdIcon.png";
const Navbar = () => {
  return (
    <div>
      <img src={Logo} alt="" />
      <div>
        <ul className="list-none">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
