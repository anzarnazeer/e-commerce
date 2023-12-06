import React from "react";
import { BrandA, BrandB, BrandC, BrandD, BrandE, BrandF } from "../assets";

const Images = [
  {
    id: 1,
    image: BrandA,
  },
  {
    id: 2,
    image: BrandB,
  },
  {
    id: 3,
    image: BrandC,
  },
  {
    id: 4,
    image: BrandD,
  },
  {
    id: 6,
    image: BrandE,
  },
  {
    id: 7,
    image: BrandF,
  },
];

function Brand() {
  return (
    <div className="pre-footer">
      <div className="wrapper">
        <h6>Shop by Brand</h6>
        <ul className="brand">
          {Images.map((item) => {
            const { image } = item;
            return (
              <li>
                <img src={image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Brand;
