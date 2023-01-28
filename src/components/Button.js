import React from "react";

const Button = ({page, text, id, handlePage}) => {
  return (
    <button className={page == text ? "active-btn" : null} id={id} onClick={() => handlePage(text)}>
      {text}
    </button>
  );
};

export default Button;
