/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <div>
        <header className="header-outer">
          <div className="header-inner responsive-wrapper">
            <div className="header-logo">
              {/* <img src="https://assets.codepen.io/285131/acme-2.svg" /> */}
              <h2>
                <strong className="text">React</strong> Tutorial 🤯
              </h2>
            </div>
            <nav className="header-navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact Us</Link>
              <button>Menu</button>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
