import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";
import "./css/Nav.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={littlelemon_logo} alt="Little Lemon Logo"></img>
      </Link>
      <ul>
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="links" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="links" to="/reserve">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="links" to="/order">
            Order Online
          </Link>
        </li>
        <li>
          <Link className="links" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
