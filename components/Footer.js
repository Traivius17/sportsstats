import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div class="footer-container">
          <div class="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/standings">Standings</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/players">Players</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>

          <div class="contact-us">
            <h3>Contact Us</h3>
            <p>
              <Link to="/contactus">Click Here</Link>
            </p>
          </div>
        </div>

        <div class="copyright">
          <p>&copy; 2023 Sports Statistics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
