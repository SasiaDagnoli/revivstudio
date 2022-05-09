import Product from "./Product";

export default function Productlist(props) {
  const mapped = props.products.map((product, index) => <Product key={index} product={product} setBasket={props.setBasket} basket={props.basket}></Product>);

  return <section>{mapped}</section>;
}
