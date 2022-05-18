import React from "react";
import { slide as Basket } from "react-burger-menu";
import "../styles/sidebar.css";
import ProductBasket from "./ProductBasket";
import MyBasket from "./MyBasket";
import RemoveFromBasket from "./RemoveFromBasket";

export default (props) => {
  // console.log("basketprops", props);
  return (
    <Basket className="basket" right>
      <h2>Your basket:</h2>
      <ProductBasket basket={props.basket} setBasket={props.setBasket}></ProductBasket>
      <MyBasket basket={props.basket} />
      {/* <RemoveFromBasket product={props.product} basket={props.basket} setBasket={props.setBasket} /> */}
    </Basket>
  );
};
