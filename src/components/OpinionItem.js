import React from "react";
import "../App.css";
import "./Opinions.css";

const OpinionItem = (props) => {
  return (
    <li className="opinion--item">
      <div className="opinion--item--left">
        <img src={props.src} alt={props.text} />
        <div className="opinion--item--data">
          <p className="opinion--item--name">{props.username}</p>
          <p className="opinion--item--date">{props.date}</p>
        </div>
      </div>
      <div className="opinion--item--right">
        <div className="opinion--item--icons">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="opinion--item--text">{props.opinion}</p>
      </div>
    </li>
  );
};

export default OpinionItem;
