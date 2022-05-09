import { useState, useEffect } from "react";

export default function Data() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("GetTheData");

    const getTheData = async () => {
      const res = await fetch("https://revivstudio-8a0a.restdb.io/rest/shop", {
        headers: { "cache-control": "no-cache", "x-apikey": "62741849e8128861fcf3d098" },
      });
      const data = await res.json();
      const popularArray = [];
      const exploreArray = [];
      console.log("data", data);

      data.forEach((product) => {
        if (product.popular === true) {
          popularArray.push(product);
        }
      });
      console.log("popular", popularArray);

      data.forEach((product) => {
        if (product.explore === true) {
          exploreArray.push(product);
        }
      });
      console.log("explore", exploreArray);
      setProducts(data);
    };
    getTheData();
  }, []);

  return (
    <div>
      <Productlist products={products}></Productlist>
    </div>
  );
}
