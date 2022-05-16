import { BrowserRouter, Link, Route } from "react-router-dom";
import SingleView from "./SingleView";

export default function Product(props) {
  console.log("productprops", props);
  return (
    <article className="product">
      <img src={`./images/${props.product.imagename}`} alt={props.product.productname} />
      <h2>{props.product.productname}</h2>
      <p>{props.product.price} KR.</p>
      <Link to={`/produkt/${props.product._id}`}>View</Link>
    </article>
  );
}
