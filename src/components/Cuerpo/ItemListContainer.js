import React from "react";
import "./ItemListContainer.css";
import { Counter } from "./ContadorItems/ItemCount";

class CajaProductos extends React.Component {
  render() {
    const producto = {
      name: "Remera piola",
      precio: "8500",
      stock: 6,
      inicio: 1,
    };
    return (
      <div className="container bg-dark mt-2">
        <div className="row align-items-center forma_provisoria">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://thejazzstore.com.ar/wp-content/uploads/2021/05/002-John-Coltrane-A-Love-Supreme-BU.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body  row justify-content-center">
              <h5 className="card-title">{producto.name}</h5>
              <p className="card-text">
                ${producto.precio} - Stock: {producto.stock} productos
              </p>
              <Counter stock={producto.stock} inicio={producto.inicio} />
              <a href="#" className="btn btn-dark">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CajaProductos;
