import React from "react";
import "../App.css";
import "./Opinions.css";
import OpinionItem from "./OpinionItem";
import male from "../images/avatar-male.jpg";
import female from "../images/avatar-female.jpg";

const Opinions = () => {
  return (
    <>
      <div className="opinions--container">
        <ul className="opinions--list">
          <OpinionItem
            src={male}
            text="user-avatar"
            username="User11"
            date="12/01/2022"
            opinion="Perfect gift for sporting cars lovers."
          />
          <OpinionItem
            src={male}
            text="user-avatar"
            username="User12"
            date="22/07/2021"
            opinion="Decent prices and polite staff who always try to help their clients."
          />
          <OpinionItem
            src={female}
            text="user-avatar"
            username="User13"
            date="02/12/2020"
            opinion="For anyone who hesitates, I can truly recommend.
             In my life I've used to rent cars from many companies, but here I meet the most friendly conditions of deal and what is more, wide choice."
          />
        </ul>
      </div>
    </>
  );
};

export default Opinions;
