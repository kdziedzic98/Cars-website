import React from "react";
import "../App.css";
import "./Button.css";

import { Link } from "react-router-dom";

const sizes = ["btn--medium", "btn--big", "btn--large"];
const styles = ["btn--primary", "btn--border"];

export const Button = ({ buttonStyle, buttonSize, children, onClick }) => {
  const checkSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
  const checkStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

  return (
    <Link to="/sign-up">
      <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};
