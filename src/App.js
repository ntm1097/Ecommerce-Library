import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./Componets/Nav";
import Home from "./Pages/Home";
import Footer from "./Componets/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
       item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
   setCart(cart.filter((book) => book.id !== item.id));
  }

  function numberOfItems () {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    })
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
