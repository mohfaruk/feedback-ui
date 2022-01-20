import React from "react";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div>
      <header style={headerStyles}>
        <div className="container">
          <h2> {text} </h2>
        </div>
      </header>
    </div>
  );
}
//default initial props when no state has been mutated
//they are passed to the function parameters
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
