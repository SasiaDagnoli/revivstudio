import Product from "./Product";

export default function Productlist(props) {
  const mapped = props.products.map((product, index) => <Product key={index} product={product}></Product>);

  return <section>{mapped}</section>;
}
