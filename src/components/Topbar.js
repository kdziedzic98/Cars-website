import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Topbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    displayButton();
  }, []);

  window.addEventListener("resize", displayButton);

  return (
    <nav className="topbar-container">
      <div className="topbar-wrapper">
        <Link to="/" className="topbar-logo" onClick={closeMobileMenu}>
          DMDCARS
          <i className="fa-solid fa-diamond"></i>
        </Link>
        <div className="topbar-icon">
          <i
            className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}
            onClick={handleClick}
          />
        </div>
        <ul className={click ? "topbar-items active" : "topbar-items"}>
          <li className="topbar-item">
            <Link to="/" className="topbar-item-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="topbar-item">
            <Link
              to="/offers"
              className="topbar-item-link"
              onClick={closeMobileMenu}
            >
              Our offers
            </Link>
          </li>
          <li className="topbar-item">
            <Link
              to="/gallery"
              className="topbar-item-link"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li className="topbar-item">
            <Link
              to="/about-us"
              className="topbar-item-link"
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
          <li className="topbar-item-mobile">
            <Link
              to="/sign-up"
              className="topbar-item-link"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && (
          <Button buttonStyle="btn--border" buttonSize="btn--big">
            Sign Up
          </Button>
        )}
      </div>
    </nav>
  );
}
export default Topbar;
