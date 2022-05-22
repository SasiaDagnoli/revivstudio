import React from "react";
import { slide as Basket } from "react-burger-menu";
import "../styles/sidebar.css";
import ProductBasket from "./ProductBasket";
import MyBasket from "./MyBasket";
import { useState } from "react";

export default (props) => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <Basket
      className="basket"
      right
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <h2>Your basket:</h2>
      <ProductBasket
        basket={props.basket}
        setBasket={props.setBasket}
      ></ProductBasket>
      <MyBasket basket={props.basket} closeSideBar={closeSideBar} />
      {/* <RemoveFromBasket product={props.product} basket={props.basket} setBasket={props.setBasket} /> */}
    </Basket>
  );
};
