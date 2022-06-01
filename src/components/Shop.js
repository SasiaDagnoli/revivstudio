import { useState } from "react";
import Productlist from "./Productlist";
import FilterButtons from "./FilterButtons";

export default function Shop(props) {
  /*  const [item, setItem] = useState(props.products);
  const productsItem = [...new Set(props.products.map((val) => val.category))];
  const filterProducts = (curcat) => {
    const newItem = props.products.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const result = props.products.filter((test) => test.category === "Armbånd");
  console.log(result); */

  return (
    <div className="Shop">
      <h1>Smykker</h1>
      {/* <FilterButtons
        filterProducts={filterProducts}
        setItem={setItem}
        productsItem={productsItem}
        products={props.products}
      ></FilterButtons> */}
      <Productlist
        products={props.products}
        basket={props.basket}
        setBasket={props.setBasket}
        amount={props.amount}
      ></Productlist>
    </div>
  );
}
