import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      {/* Logo */}
      <Link className="navbar-brand fw-bold text-primary" to="/">
        RESUME-BUILDER
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resumes">
              Resumes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/prices">
              Prices
            </Link>
          </li>
        </ul>

        <div>
          <Link to="/login" className="btn">
            Log In
          </Link>
          <Link to="/signup" className="btn1">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
