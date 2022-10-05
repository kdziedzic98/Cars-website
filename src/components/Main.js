import React from "react";
import "../App.css";
import "./Main.css";
import { Button } from "./Button";

const Main = () => {
  return (
    <div className="main--container">
      <h1 className="main--headline">FEEL THE LUXURY</h1>
      <p className="main--paragraph">
        Check out our best offers for renting a car
      </p>
      <div className="main--btn">
        <Button buttonStyle="btn--border" buttonSize="btn--large">
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};

export default Main;
