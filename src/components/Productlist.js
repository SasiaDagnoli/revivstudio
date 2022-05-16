import Product from "./Product";

export default function Productlist(props) {
  console.log("", props);
  const mapped = props.products.map((product, index) => <Product key={index} product={product} setBasket={props.setBasket} basket={props.basket}></Product>);

  return <section className="shop-section">{mapped}</section>;
}
