import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddToBasket from "./AddToBasket";

export default function SingleView({ basket, setBasket }) {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(`https://revivstudio-8a0a.restdb.io/rest/shop/${params.id}`, {
        headers: { "cache-control": "no-cache", "x-apikey": "62741849e8128861fcf3d098" },
      });

      const json = await res.json();

      setProduct(json);
    }
    getProduct();
  }, [params.id]);

  console.log(product);

  return (
    <div className="product">
      {product ? (
        <section className="single-section">
          <img src={`/images/${product.imagename}`} alt={product.productname} />
          <h1>{product.productname}</h1>
          <h2>Normalpris {product.price} KR.</h2>
          <p>Inklusiv moms. Levering beregnes ved betaling.</p>
          <AddToBasket product={product} basket={basket} setBasket={setBasket} />
          <p className="pick-up-text">
            ✓ Afhentning er tilgængelig fra Holmbladsgade 107. <br /> <strong>Normalt klar inden for 24 timer.</strong>
          </p>
          <p>{product.productdescription}</p>
        </section>
      ) : (
        <section>
          <h1>Loading...</h1>
        </section>
      )}
    </div>
  );
}
