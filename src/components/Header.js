import React from "react";
import { Cart, Heart, Logo, Search, Arrow } from "../assets";

function Header() {
  return (
    <div className="header">
      <div className="header-mini">
        <h1>
          <img src={Logo} />
        </h1>
        <ul className="header-nav">
          <li>
            <div className="search">
              <img src={Search} />
            </div>
            <input className="input" placeholder="Search For Products" />
          </li>
          <hr className="line" />
          <li>
            <img src={Heart} />
          </li>
          <li>
            <img src={Cart} />
          </li>
          <li>
            <button className="button">Get Start <img src={Arrow} alt="arrow" /></button>      
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
