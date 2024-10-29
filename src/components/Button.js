import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button style={{ color: color }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
