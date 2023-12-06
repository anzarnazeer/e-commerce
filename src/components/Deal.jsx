import React from "react";
import { DealImage } from "../assets";

function Deal() {
  return (
    <div className="deal">
      <div className="wrapper deal-main">
        <div className="left">
            <h5>Best deals for <span>Vitamin Tablets</span></h5>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder</p>
            <button>Proceed to order </button>
        </div>
        <div className="right">
            <img src={DealImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Deal;
