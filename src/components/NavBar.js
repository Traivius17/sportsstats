import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import "./NavBar.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
function NavBar() {
  const [button, setButton] = useState(true);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} />
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/standings" className="nav-links">
                Standings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-links">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/players" className="nav-links">
                Players
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-links">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-links">
                Help
              </Link>
            </li>
          </ul>

          <Button buttonStyle="btn--outline">SIGN UP | LOG IN </Button>

          <div className="profile">
            <Link to="/profile">
              <button className="btn--outline">
                <i class="fa-solid fa-user"></i>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
