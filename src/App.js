import React, { useState, useEffect } from "react";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";
import shoesData from "./data/ShoeData";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (shoe) => {
    const existing = cart.find((item) => item.id === shoe.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

 
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const removeAll = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <ShoeList shoes={shoesData} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} removeAll={removeAll} />
    </div>
  );
}
export default App;
