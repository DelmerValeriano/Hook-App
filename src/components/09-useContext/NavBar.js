import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              
              className="nav-item nav-link"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="nav-item nav-link"
              to="./about"
            >
              About
            </NavLink>

            <NavLink
              
              className="nav-item nav-link"
              to="./login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
