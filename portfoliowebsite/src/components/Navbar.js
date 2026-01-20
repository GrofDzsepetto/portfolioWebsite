import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/monkey.jpg";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* LINKS */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link to="/socials" onClick={() => setMenuOpen(false)}>Socials</Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
