import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal,
    removeItem,
  } = useContext(CartContext);

  return (
    <>
      <div className="cart-box">
        <h2>Your Cart ({cartItems.length})</h2>
        <div>
          {cartItems.map((product) => {
            return (
              <div key={product.id} className="cart-product">
                <div className="cart-product-detail">
                  <span className="prod-name">{product.name}</span>
                  <span
                    className="remove-item"
                    onClick={() => removeItem(product)}
                  >
                    x
                  </span>
                </div>

                <div className="cart-quantity">
                  <span className="prod-price">${product.price}</span>
                  <div className="flex ">
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                    <p> {product.quantity}</p>

                    <button
                      onClick={() => {
                        removeFromCart(product);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="cart-total">
            {cartItems.length > 0 ? (
              <>
                <p>Total: ${cartTotal}</p>
                <button onClick={() => clearCart()}>Clear Cart</button>
              </>
            ) : (
            
                <div>
                  <h3>Cart is empty</h3>
                <img src="/assets/images/illustration-empty-cart.svg" alt="" />
                </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
