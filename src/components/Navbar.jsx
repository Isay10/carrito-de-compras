import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// get our fontawesome imports

export default function Navbar() {
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
              Juan Ignacio
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/television"
            >
              Carrito (0)
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/consoles"
            >
              Credito: $100000
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}
