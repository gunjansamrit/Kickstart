// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./page/shop/shop";
// import { Contact } from "./page/shop/contact";
import { Cart } from "./page/cart/cart";
import { ProductDescription } from "../src/page/shop/productdescription";
import { ShopContextProvider } from "./context/shop-context";
import { PRODUCTS } from "./product"; // Import your list of products
import {User} from "../src/components/user";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/user" element={<User />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDescription products={PRODUCTS} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
