import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { userService } from "../services/userService";

import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState("");
  const [productsPuchased, setProductsPuchased] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    let resultName = userService.getUsers();
    setUser(resultName.firstName);
    let resultMoney = userService.getUsers();
    setMoney(resultMoney.credit);
    /* let resultName = userService.getUsers();
    setUser(resultName.firstName); */
  }, []);
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <div className="nav-home">
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Tienda de productos
            </NavLink>
          </li>
        </div>
        <div className="nav-option">
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/cellphones"
            >
              {user}
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/television"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> {productsPuchased}
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/consoles"
            >
              Credito: ${money}
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}
