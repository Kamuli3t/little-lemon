import React from "react";
import { MdDeliveryDining } from "react-icons/md";

const Cards = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} id="card__image" />
      </div>
      <div className="card__heading">
        <div className="card__title">{title}</div>
        <div className="card__price">{`$${price}`}</div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="card__action">
        <div className="mt-4">Order a derivery</div>
        <MdDeliveryDining id="deliver_icon" />
      </div>
    </div>
  );
};

export default Cards;
