import React from "react";

class Botonera extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            Sabrina Indumentaria
          </a>
          <ul className="navbar-nav">
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
        </div>
      </nav>
    );
  }
}
export default Botonera;
