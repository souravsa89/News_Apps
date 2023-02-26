import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// import { FaSistrix } from "react-icons/fa";
// import { Button } from "./Button";
// import Dropdown from "./Dropdown";
// import Search from "./Atom/Search/Search";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          NewsReact
          {/* <i class="fab fa-firstdraft" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/general" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/business"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/entertainment"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/science" className="nav-links" onClick={closeMobileMenu}>
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/technology"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sports" className="nav-links" onClick={closeMobileMenu}>
              Sports
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
