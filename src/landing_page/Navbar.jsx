import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white py-3">
      <div className="container">
        {/* Logo - Adjusted width for better visibility */}
        <a className="navbar-brand" href="#">
          <img 
            src="media/images/logo.svg" 
            alt="Logo" 
            style={{ width: "20%" }} 
            className="img-fluid"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links - Pushed to the right using ms-auto */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-3">
              <a className="nav-link text-muted fw-medium" href="#">Signup</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-muted fw-medium" href="#">About</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-muted fw-medium" href="#">Products</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-muted fw-medium" href="#">Pricing</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-muted fw-medium" href="#">Support</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-muted" href="#">
                <i className="fa-solid fa-bars fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;