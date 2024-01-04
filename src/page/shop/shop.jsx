import React from "react";
import { PRODUCTS } from "../../product.js";
import { Product } from "../shop/products";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>KICK CART</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
