import React from "react";

const Header = ({ heading = "h1", content }) => {
  // Validate heading level (optional)
  if (!["h1", "h2", "h3", "h4", "h5", "h6"].includes(heading.toLowerCase())) {
    console.warn(`Invalid heading level: ${heading}. Using 'h1' as default.`);
    heading = "h1";
  }

  // Efficient JSX with dynamic heading tag
  return <>{React.createElement(heading, null, content)}</>;
};

export default Header;
