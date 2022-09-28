import React, { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  const [click, setClick] = useState("false");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick("false");

  return (
    <nav className="topbar-container">
      <div className="topbar-wrapper">
        <div className="topbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            DMDCARS
            <i className="fa-solid fa-diamond"></i>
          </Link>
        </div>
        <div className="topbar-menu">
          <i
            className={click ? "fa-solid fa-bars" : "fa-solid fa-x"}
            onClick={handleClick}
          />
        </div>
        <ul className={click ? "topbar-links active" : "topbar-links"}>
          <li className="topbar-links-item">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="topbar-links-item">
            <Link to="/" onClick={closeMobileMenu}>
              Our offers
            </Link>
          </li>
          <li className="topbar-links-item">
            <Link to="/" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="topbar-links-item">
            <Link to="/" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topbar;
