import React from "react";

const Button = ({ url, content, isFilled }) => {
  return (
    <button
      className={`button ${!isFilled ? "disabled" : ""}`}
      aria-label={content}
      disabled={isFilled}
    >
      {content}
    </button>
  );
};

export default Button;
