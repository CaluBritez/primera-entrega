import React from "react";
import { useState } from "react";

export const Counter = ({ stock, inicio }) => {
  const [counter, setCounter] = useState(inicio);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={restar} className="btn btn-dark">
        -
      </button>
      <input type="text" value={counter}></input>
      <button onClick={sumar} className="btn btn-dark">
        +
      </button>
    </div>
  );
};
