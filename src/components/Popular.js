import React, { useEffect, useState } from "react";
import { HeartA, ShareA, mask } from "../assets";

function Popular(props) {
  const [products, setProducts] = useState([]);
  const { button, title, apiData, flag } = props;

  useEffect(() => {
    productApi();
  }, []);

  const productApi = async () => {
    try {
      const response = await fetch(
        apiData
          ? "https://fakestoreapi.com/products"
          : "https://fakestoreapi.com/products/category/jewelery"
      );
      const productDetails = await response.json();
      setProducts(productDetails);
    } catch (error) {
      console.error("Error Fetching Products", error);
    }
  };
  return (
    <div className="wrapper pop-main">
      <h3>{title}</h3>
      <div className="button-flex">
       {button && <>
          <button className="po-button">Best Sellers</button>
        <button className="pop-button">Catogory's</button>
        </>}
      </div>
      <div className="flex-pop">
        {products?.map((item) => {
          const { image, title, price, rating } = item;
          return (
            <>
              <div className="pop-cont">
                {flag && 
                  <>
                    <div className="flag">
                      <img src={mask} alt="" />
                    </div>
                    <p className="flag-p">{rating?.rate}%</p>
                  </>
                }
                <div className="flex-share">
                  <span>
                    <img src={HeartA} alt="" />
                  </span>
                  <span>
                    <img src={ShareA} alt="" />
                  </span>
                </div>
                <div className="product-img">
                  <img src={image} alt="" />
                </div>
                <div className="price-tag">
                  <p className="tittle">{title}</p>
                  <p className="mrp">Mrp: $5322</p>
                  <div className="rice-cont">
                    <p className="price">Price :{price}</p>
                    <p className="off">32% Off</p>
                  </div>
                </div>
                <button className="button-div">Add to Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
