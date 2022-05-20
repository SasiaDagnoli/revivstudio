import { useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

export default function MyBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price * currentValue.amount;
  }, initialValue);

  return (
    <div id="your-basket">
      <h2 className="subtotal">Subtotal: {sum} DKK</h2>
      {props.basket.length > 0 && (
        <Link to="/checkout">
          <button>Videre til kassen</button>
        </Link>
      )}
    </div>
  );
}
