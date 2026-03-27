import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sliitLogo from "./logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">
          <img className="nav-brand-image" src={sliitLogo} alt="SLIIT Logo" />
          <Link to="/" className="logo">
            SLIIT EMS
          </Link>
        </div>

        {/* Links */}
        <ul className="nav-menu">
          <li><Link to="/mainhome">Home</Link></li>
          <li><Link to="/merch">Merch</Link></li>
          <li><Link to="/addmerch">Add Merch</Link></li>
        </ul>

        {/* Right side */}
        <div className="nav-right">
          <Link to="/cart" className="cart">
            🛒 <span className="cart-count">0</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
