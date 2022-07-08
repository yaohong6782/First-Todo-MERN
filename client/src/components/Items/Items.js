import React from "react";

import "./Items.css";

const Items = ({ text, remove, update }) => {
  return (
    <div className="item">
      <div className="text">{text}</div>
      <div className="icons">
        <i className="ri-pencil-fill" onClick={update}></i>
        <i className="ri-delete-bin-fill" onClick={remove}></i>
      </div>
    </div>
  );
};

export default Items;
