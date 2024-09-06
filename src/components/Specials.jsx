import React from "react";
import Header from "./Header";
import Button from "./Button";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/Halloumi-Bruschetta-2.jpg";
import lemonDessert from "../assets/lemon dessert.jpg";
import Cards from "./Card";

const cards = [
  {
    image: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruchetta,
    title: "Bruchetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: lemonDessert,
    title: "Lemon Dessert",
    price: 4.99,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  return (
    <div className="container wrapper__specials">
      <div className="specials__title">
        <Header content="SPECIALS" heading="h2" />
        <Button content="Order Menu" />
      </div>
      <div className="specials__dishes">
        {cards.map((dish) => (
          <Cards
            key={dish.title}
            image={dish.image}
            title={dish.title}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
