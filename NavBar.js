import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1></h1>
      </div>
      <div className="hamburger" onClick={toggleLinks}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${showLinks ? "show" : ""}`}>
        <li>
          <Link to="/" className="nav-button">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-button">Dashboard</Link>
        </li>
        <li>
          <Link to="/login" className="nav-button">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
