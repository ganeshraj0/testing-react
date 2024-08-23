import React from "react";

const Header = ({ titel }) => {
  return (
    <header>
      <h2>{titel}</h2>
    </header>
  );
};
Header.defaultProps = {
  titel: "To Do List",
};
export default Header;
