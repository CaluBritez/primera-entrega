import React from "react";
import "./NavBar.css";
import CartWidget from "./Carrito/CartWidget.js";
import UserWidget from "./User/UserWidget";
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand col-md-3">
            Sabrina Indumentaria
          </a>
          <ul className="navbar-nav col-md-4">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hombre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mujer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nene
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nena
              </a>
            </li>
          </ul>
          <CartWidget />
          <UserWidget />
        </div>
      </nav>
    );
  }
}
export default NavBar;
