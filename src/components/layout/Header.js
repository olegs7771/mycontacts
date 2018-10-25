import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="  navbar navbar-expand-sm navbar-dark mb-3 py-0  bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Contacts
          </a>
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question mr-2" />
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus mr-2" />
                  Add Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home mr-2" />
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
