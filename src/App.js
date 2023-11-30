import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import PizzaBuilder from "./PizzaBuilder";
import './App.css'
const App = () => {
  return (
    <>
      <nav id="link-parent">
        <Link
          to='/'
          id="home-button"
          className="Links">Home</Link>
        <Link
          to='/pizza'
          id="order-pizza"
          className="Links">order pizza</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<PizzaBuilder />} />
      </Routes>
    </>
  );
};
export default App;
