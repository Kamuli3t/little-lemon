import React from "react";
import Header from "./Header";
import Button from "./Button";
import resturantphoto from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="wrapper__hero">
      <div className="container hero">
        <div className="hero__info">
          <Header heading="h1" content="Little Lemon" />
          <Header heading="h3" content="Chicago" />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <Button isFilled={true} content="Reserve a Table" />
          </Link>
        </div>
        <div className="hero__pic">
          <img
            id="resturant_photo"
            src={resturantphoto}
            alt="restaurant food preview"
            width="335"
            height="413"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
