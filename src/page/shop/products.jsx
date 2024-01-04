// Product.js

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ShopContext } from "../../context/shop-context";
import { ProductDescription } from "../shop/productdescription";
//import "./product.css"; // Import the associated CSS file

export const Product = (props) => {
  const { id, productName, price, productImage, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleDetails = () => {
    setSelectedProduct(selectedProduct === id ? null : id);
  };

  return (
    <div className={`product ${selectedProduct === id ? "selected" : ""}`}>
      <img src={productImage} alt=" not found" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        {/* Use Link to navigate to the product description page */}
        <Link to={`/product/${id}`}>
          <button className="detailsButton" onClick={toggleDetails}>
            Details
          </button>
        </Link>
      </div>
      <button
        className={`addToCartBttn ${cartItemCount > 0 ? "inCart" : ""}`}
        onClick={() => addToCart(id)}
        disabled={cartItemCount > 0}
      >
        {cartItemCount > 0 ? (
          <>In Cart ({cartItemCount})</>
        ) : (
          <>Add To Cart</>
        )}
      </button>
      {selectedProduct === id && (
        <ProductDescription
          productName={productName}
          description={description}
          productImage={productImage}
          price={price}
        />
      )}
    </div>
  );
};
