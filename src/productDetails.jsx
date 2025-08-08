import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartContext";
import SearchBar from "./searchBar";
import Cart from "./cart";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { addToCart } = useContext(CartContext);

  const normalizeString = (str) => str.normalize("NFD").toLowerCase();

  const search = searchText.normalize("NFD").toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      normalizeString(product.name)
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      normalizeString(product.category)
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="side">
        <div className="products">
          {filteredProducts.map((product) => {
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
        <Cart />
      </div>
    </>
  );
};

export default ProductDetails;
