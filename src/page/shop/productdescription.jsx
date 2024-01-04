// ProductDescription.js

import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the URL parameters
import "./productdescription.css";

export const ProductDescription = ({ products }) => {
  const { id } = useParams(); // Extract the id from the URL parameter
  const productId = parseInt(id, 10);
  
  // Find the product based on the productId
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { productName, description, productImage, price } = product;

  return (
    <div className="product-description">
      <img src={productImage} alt="Product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};
