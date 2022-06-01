import { useState } from "react";

export default function FilterButtons({
  filterProducts,
  setItem,
  productsItem,
  products,
}) {
  return (
    <>
      <div className="filterbuttons">
        <button onClick={() => setItem(products)}>Alle</button>

        {productsItem.map((val, id) => {
          return (
            <button key={id} onClick={() => filterProducts(val)}>
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
}
