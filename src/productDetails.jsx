import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartContext";


const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch();
  }, []);

  return (
    <>
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.image.mobile} />
              <button className="add" onClick={() => addToCart(product)}>
                <img src="/assets/images/icon-add-to-cart.svg" />
                Add to Cart
              </button>
              <div className="prod-details">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetails;
