import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <Link to="/" className="navbar-brand ms-5 text-warning">
        Colors
      </Link>
      <button
        className="navbar-toggler me-5"
        type="button"
        data-bs-target="#menu"
        data-bs-toggle="collapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white fw-bold">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white fw-bold">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white fw-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
