import React from "react";
import "../App.css";

export default function ShoeList({ shoes, addToCart }) {
  return (
    <div className="shoe-list">
      <h2>Available Shoes</h2>
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe-card">
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
          <h3>{shoe.name}</h3>
          <p>${shoe.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(shoe)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
