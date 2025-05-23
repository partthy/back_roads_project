import React from "react";
import logo from "../images/logo.svg";
import { data, pageLinks } from "./data.js";
import { socialLinks } from "./data.js";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* {<!-- left this comment on purpose -->} */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    className="nav-icon"
                  >
                    <i className={link.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
