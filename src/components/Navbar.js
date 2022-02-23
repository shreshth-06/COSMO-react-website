/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  //========>>>> or <<<<============//

  function closeMobileMenu() {
    setClick(false);
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  // const closeMenu = () => setClick(false);
  const toggleHome = () => {
    setClick(false);
    scroll.scrollToTop();
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  // To stop showing signup button in the middle of navbar after squeezing the screen :
  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={toggleHome}>
            COSMO <i className="fab fa-battle-net"></i>
            {/* SPACE <i className="fa fa-rocket"></i> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={toggleHome}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/podcasts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {button && (
            <Button buttonStyle="btn--outline" onClick={props.data}>
              SignUp
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
