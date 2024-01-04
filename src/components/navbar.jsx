import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
//import{User}

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/user"> User </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  )
};
