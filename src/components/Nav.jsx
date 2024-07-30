import React from "react";
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
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="reservations">Reservations</a>
                </li>
                <li>
                  <a href="order">Order Online</a>
                </li>
                <li>
                  <a href="login">Login</a>
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
