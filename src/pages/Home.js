import React from "react";
import Main from "../components/Main";
import Cards from "../components/Cards";
import Opinions from "../components/Opinions";
import ".././App.css";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <Cards />
      <Opinions />
    </div>
  );
};

export default Home;
