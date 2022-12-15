
import signout from "../images/index.jpg";
import { FaUnlock } from "react-icons/fa";



import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../CompunentsStyle/Navbar.css";
// import { Link } from "react-router-dom";
import logo from "../images/dentalLogo.png";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="cloths-navbar ">
      <div>
        <div className="logo__text">
          <img src={logo} className="Dental__logo"></img>
          <p className="font-bold mt-1">Bandaid</p>
        </div>
      </div>

      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <li className="mt-2 text-gray-600">Home</li>
        <li className="mt-2 text-gray-600">Services</li>
        <li className="mt-2 text-gray-600">Blogs</li>
        <li className="mt-2 text-gray-600">My Reviews</li>
        <li className="mt-2 text-gray-600">Add Services</li>

        <div className="img__btn ">
          <img src={signout} className="signImg"></img>
          <button type="button" className="NavBar__btn gap-1 ">
            Sign out <FaUnlock />
          </button>
        </div>
      </ul>
      <div className="menu__icon ">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
