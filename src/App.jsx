import React from "react";
import ProductDetails from "./productDetails";
import Cart from "./cart";
import Header from "./header";

const App = () => {
  return (
    <>
    <Header />
      <div className="side">
        <ProductDetails />
        <Cart />
      </div>
    </>
  );
};

export default App;
