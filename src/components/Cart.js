import React from "react";
import "../App.css";

export default function Cart({ cart, removeFromCart, removeAll }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <strong>{item.name}</strong> (${item.price})
            </div>
            <div className="cart-actions">
              <span>Qty: {item.quantity}</span>
              <button
                className="btn btn-small btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                −
              </button>
              <button
                className="btn btn-small btn-remove"
                onClick={() => removeAll(item.id)}
              >
                Remove All
              </button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
