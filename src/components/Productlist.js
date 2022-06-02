import Product from "./Product";
import { useState } from "react";
import FilterButtons from "./FilterButtons";

export default function Productlist(props) {
  const products = props.products;
  const [item, setItem] = useState(props.products);
  const productsItem = [...new Set(props.products.map((val) => val.category))];
  const filterProducts = (curcat) => {
    const newItem = props.products.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const mapped = item.map((product, index) => (
    <Product
      key={index}
      product={product}
      setBasket={props.setBasket}
      basket={props.basket}
      item={item}
    ></Product>
  ));

  return (
    <div>
      <section className="filter-buttons">
        <FilterButtons
          filterProducts={filterProducts}
          setItem={setItem}
          productsItem={productsItem}
          products={products}
        ></FilterButtons>
      </section>
      <section className="shop-section">{mapped}</section>
    </div>
  );
}
