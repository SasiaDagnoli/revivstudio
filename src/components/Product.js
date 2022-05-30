import { Link } from "react-router-dom";
import AddToBasket from "./AddToBasket";

export default function Product(props) {
  console.log("product", props);
  return (
    <article className="product">
      <Link to={`/produkt/${props.product._id}`}>
        <img
          src={`./images/productimages/${props.product.imagename}`}
          alt={props.product.productname}
        />
        <h2>{props.product.productname}</h2>
        <p>{props.product.price} KR.</p>
      </Link>
      <AddToBasket
        product={props.product}
        basket={props.basket}
        setBasket={props.setBasket}
      ></AddToBasket>
    </article>
  );
}
