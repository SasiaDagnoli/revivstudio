import { useLocation } from "react-router-dom";

export default function SingleView() {
  const location = useLocation();
  const { props } = location.state;

  return (
    <section className="single-section">
      <img src={`/images/${props.product.imagename}`} alt={props.product.productname} />
      <h1>{props.product.productname}</h1>
      <h2>Normalpris {props.product.price} KR.</h2>
      <p>Inklusiv moms. Levering beregnes ved betaling.</p>
      <button> Læg i indkøbskurv</button>
      <p>{props.product.productdescription}</p>
    </section>
  );
}
