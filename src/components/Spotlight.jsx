import React from "react";
import { SpotlightImage, Graph, Flash } from "../assets";

function Spotlight() {
  return (
    <>
      <div className="main">
        <div className="wrapper sub-main">
          <div className="left-spotlight">
            <h2>WORKOUT ESSENTIAL SUPPLEMENTS</h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface.
            </p>
            <button className="button">Buy Now</button>
            <div className="graph"></div>
          </div>
          <div className="right-spotlight">
            <img src={SpotlightImage} alt="" />
          </div>
        </div>
        <div className="graph">
          <img src={Graph} alt="graph" />
        </div>
        <div className="flash">
          <img src={Flash} alt="" />
        </div>
      </div>
    </>
  );
}

export default Spotlight;
