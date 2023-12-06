import React from "react";
import { ImageA } from "../assets";
const topCategory = [
    { id: 1, name: "Vitamins", image: ImageA, colors: "#EBF8E6" },
    { id: 2, name: "Vitamins", image: ImageA, colors: "#FFE8ED" },
    { id: 3, name: "Vitamins", image: ImageA, colors: "#E5EDFA" },
    { id: 4, name: "Vitamins", image: ImageA, colors: "#FFEFB6" },
  ];

function TopCategory() {
 

  return (
    <div style={{}} className="wrapper">
        <div className="top-cintainer">
        <h5 className="top">Top Category’s </h5>
        <p>View all</p>
        </div>
      <div className="block-flex">
        {topCategory?.map((item) => {
          const { name, image, colors } = item;
          return (
            <ul style ={{backgroundColor:colors}} className="block-container">
              <li   className="block">
                <p>{name}</p>
                <span>
                  <img src={image} alt="image" />
                </span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default TopCategory;
