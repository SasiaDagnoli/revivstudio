import React from "react";
import { slide as Basket } from "react-burger-menu";
import "../styles/sidebar.css";
import ProductBasket from "./ProductBasket";

export default (props) => {
  return (
    <Basket right>
      <h2>Your basket:</h2>
      <ProductBasket basket={props.basket}></ProductBasket>
    </Basket>
  );
};
