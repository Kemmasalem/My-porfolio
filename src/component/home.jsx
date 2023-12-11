import React from "react";
import { Project } from "./project";

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="main-hero">
          <h1 className="hero-h1">
            <span className="span">Hello, i'm </span> <br /> Isiguzo Kelechi Salem
          </h1>
          <p>A Graphics Designer And A Frontend Web Developer</p>
          <p>
            A Passionate Web Developer Creating
            <br />
            Digital Experiences that Inspire.
          </p>
        </div>
        <div className="main-hero two ">
          <img src="hero-image4.png" className="hero-img" alt="a picture of me" />
          <div className="blop"></div>
          <div className="blop"></div>
          <div className="blop"></div>
        </div>
      </div>
    
    
    
    <Project/>
    
    </div>
  );
};

export default Home;
