import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// get our fontawesome imports

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home{" "}
          </NavLink>
        </li>

        <li className="nav-li">
          <NavLink
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/cellphones"
          >
            Celulares
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/television"
          >
            Television
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/consoles"
          >
            Consolas{" "}
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/shoppingcart"
          >
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
