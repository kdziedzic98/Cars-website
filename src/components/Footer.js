import React from "react";
import "../App.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <h1 className="footer-headline">Are you interested?</h1>
          <p className="footer-paragraph">Contact with us</p>
          <Button buttonStyle="btn--border" buttonSize="btn--medium">
            Contact form
          </Button>
          <div className="footer-links">
            <div className="footer-links-wrapper">
              <div className="footer-links-item">
                <h2>About us</h2>
                <Link to="/">How it works</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Sponsorships</Link>
                <Link to="/">Terms of Service</Link>
              </div>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-links-item">
                <h2>Contact us</h2>
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Conditions</Link>
                <Link to="/">Ambassadors</Link>
              </div>
            </div>
          </div>
          <div className="footer-socialmedia">
            <div className="footer-socialmedia-wrapper">
              <div className="footer-socialmedia-logo">
                <Link to="/" className="social-logo">
                  DMDCARS
                  <i className="fa-solid fa-diamond"></i>
                </Link>
              </div>
              <small className="footer-website-rights">
                DMDCARS &copy; 2022
              </small>
              <div className="footer-social-icons">
                <Link
                  className="social-icon-link facebook"
                  to="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="social-icon-link twitter"
                  to="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="social-icon-link instagram"
                  to="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </Link>
                <Link
                  className="social-icon-link youtube"
                  to="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <i className="fab fa-youtube" />
                </Link>
                <Link
                  className="social-icon-link linkedin"
                  to="/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <i className="fab fa-linkedin" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
