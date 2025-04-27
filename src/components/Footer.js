import React from "react";
import { pageLinks, socialLinks } from "./data";
const Footer = () => {
  return (
    <div>
      <footer class="section footer">
        <ul class="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} class="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul class="footer-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  class="footer-icon"
                  rel="noreferrer"
                >
                  <i class={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">2025</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
