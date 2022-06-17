import React from "react";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="app__navbar">
        <Link to="/" className="app__navbar-logo">
          <a className="logo" href="/">
            J&K PROPERTIES
          </a>
        </Link>
        <ul className="app__navbar-links">
          <li className="app__navbar-link">Home</li>
          <li className="app__navbar-link">Properties</li>
          <li className="app__navbar-link">Our Team</li>
          <li className="app__navbar-link">Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
