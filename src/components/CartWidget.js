import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class CartWidget extends React.Component {
  render() {
    return (
      <div
        className="row justify-content-end"
        style={{ fontSize: "3em", color: "White" }}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    );
  }
}

export default CartWidget;
