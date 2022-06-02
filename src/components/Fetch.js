import { useEffect, useState } from "react";
import Shop from "./Shop";

export default function Fetch() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const getTheData = async () => {
      const res = await fetch("https://revivstudio-8a0a.restdb.io/rest/shop", {
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "62741849e8128861fcf3d098",
        },
      });
      const data = await res.json();
      const popularArray = [];
      const exploreArray = [];

      data.forEach((product) => {
        if (product.popular === true) {
          popularArray.push(product);
        }
      });

      data.forEach((product) => {
        if (product.explore === true) {
          exploreArray.push(product);
        }
      });
      setProducts(data);
    };
    getTheData();
  }, []);
  <Shop products={products} setBasket={setBasket} basket={basket} />;
}
