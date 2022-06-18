import React, { useState } from "react";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="app__navbar">
        <Link to="/" className="app__navbar-logo">
          <a className="logo" href="/">
            J&K PROPERTIES
          </a>
        </Link>
        <ul className="app__navbar-links">
          <li className="app__navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="app__navbar-link">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="app__navbar-link">
            <a href="#team">Our Team</a>
          </li>
          <li className="app__navbar-link">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
          {toggleMenu ? (
            <CgClose
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <CgMenuGridR
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <ul className="app__navbar-smallscreen_links">
                <li className="app__navbar-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="app__navbar-link">
                  <Link to="/properties">Properties</Link>
                </li>
                <li className="app__navbar-link">
                  <a href="#team">Our Team</a>
                </li>
                <li className="app__navbar-link">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
