import React from "react";
import { Down } from "../assets";


function NavBar() {
  return (
    <div className="wrapper">
      <ul className="navigation">
        <li>Best Sellers
        </li>
        <li className="list-arrow">Products
            <span><img src={Down} alt="" /></span>
        </li>
        <li className="list-arrow">Brand
        <span><img src={Down} alt="" /></span>
        </li>
        <li className="list-arrow">Outlet
        <span><img src={Down} alt="" /></span>
        </li>
        <li>Offers</li>
        <li>Our Story</li>
      </ul>
    </div>
  );
}

export default NavBar;
