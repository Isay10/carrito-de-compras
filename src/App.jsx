import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./pages/User";
import Consoles from "./pages/Consoles";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/ShoppingCart";
import Television from "./pages/Television";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user" element={<User />} />
        <Route path="television" element={<Television />} />
        <Route path="consoles" element={<Consoles />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
