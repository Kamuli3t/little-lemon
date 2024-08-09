import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Nav = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <header>
            <div id="logo">
              <Logo />
            </div>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/booking">Reservations</Link>
                </li>
                <li>
                  <Link to="/order">Order Online</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};

export default Nav;
