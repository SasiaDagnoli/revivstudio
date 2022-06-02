import { Link } from "react-router-dom";
export default function Checkout(props) {
  const mapped = props.basket.map((product, index) => (
    <article>
      <img src={`./images/productimages/${product.imagename}`} alt="" />
      <div>
        <h2>{product.productname}</h2>
        <p>Antal: {product.amount}</p>
      </div>
      <p>{product.price} DKK</p>
    </article>
  ));

  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price * currentValue.amount;
  }, initialValue);
  return (
    <div className="checkout-section">
      <h1>Din indkøbskurv</h1>
      <section className="items-in-basket">{mapped}</section>

      <div className="promo-code">
        <input type="text" id="promo-code" placeholder="Rabatkode" />
        <input type="submit" id="submit-promo" value="→" />
      </div>

      <hr />
      <div className="delivery-info">
        <p>Levering: </p>
        <p>Fra 39 Kr.</p>
      </div>
      <hr />
      <div className="price-info">
        <p>I alt: </p>
        <p>{sum} Kr.</p>
      </div>
      <Link to="/kontaktinfo">
        <button className="next-btn">
          <img src={`./images/pil.png`} alt="" />
        </button>
      </Link>
    </div>
  );
}
