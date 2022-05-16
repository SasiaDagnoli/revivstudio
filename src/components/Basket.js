import React from "react";
import { slide as Basket } from "react-burger-menu";
import "../styles/sidebar.css";
import ProductBasket from "./ProductBasket";
import MyBasket from "./MyBasket";

export default (props) => {
  return (
    <Basket className="basket" right>
      <h2>Your basket:</h2>
      <ProductBasket basket={props.basket}></ProductBasket>
      <MyBasket basket={props.basket} />
    </Basket>
  );
};
