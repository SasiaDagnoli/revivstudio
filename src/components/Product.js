import { BrowserRouter, Link, Route } from "react-router-dom";
import SingleView from "./SingleView";
import AddToBasket from "./AddToBasket";

export default function Product(props) {
  // console.log("productprops", props);
  return (
    <article className="product">
      <Link to={`/produkt/${props.product._id}`}>
        <img src={`./images/${props.product.imagename}`} alt={props.product.productname} />
        <h2>{props.product.productname}</h2>
        <p>{props.product.price} KR.</p>
      </Link>
      <AddToBasket product={props.product} basket={props.basket} setBasket={props.setBasket}></AddToBasket>
    </article>
  );
}
