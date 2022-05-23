import { Link } from "react-router-dom";
export default function ApproveOrder(props) {
  const number = parseInt(props.deliveryState);
  const mapped = props.basket.map((product, index) => (
    <article>
      <img src={`./images/${product.imagename}`} alt="" />
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
  let totalWithDelivery = props.basket.reduce(function (
    previousValue,
    currentValue
  ) {
    return previousValue + currentValue.price * currentValue.amount + number;
  },
  initialValue);
  return (
    <div>
      <div className="checkout-steps">
        <ul>
          <li>Indkøbskurv →</li>
          <li>
            <strong>Oplysninger →</strong>
          </li>
          <li>Levering →</li>

          <li>
            <strong>Gennemgå →</strong>
          </li>
          <li>Betaling </li>
        </ul>
      </div>
      <section className="approve-section">
        <h1>3. Gennemse ordre</h1>
        <h2>Subtotal inkl. moms </h2>
        <div className="checkout-section">{mapped}</div>
        <hr />
        <div className="order-price-calc">
          <div>
            <p>Subtotal:</p>
            <p>{sum}</p>
          </div>
          <div>
            <p>Levering:</p>
            <p>{number} Kr.</p>
          </div>
          <div>
            <p>Moms udgør</p>
            <p>25%</p>
          </div>
        </div>
        <hr />
        <div className="order-price-total">
          <p>I alt</p>
          <p>Kr. {totalWithDelivery}</p>
        </div>
        <hr />
        <div className="order-accept">
          <p>
            Klik på "Jeg accpeterer" for at bekræfte, at du har læst og
            accepteret forretningsbetingelserne.
          </p>
          <p>
            <strong>Klik her for at læse forretningsbetingelserne</strong>
          </p>
          <p>
            <strong>Klik her for at læse vores persondatapolitik</strong>
          </p>
          <form action="">
            <div className="form-control">
              <input type="checkbox" id="accept" />
              <label htmlFor="accept">Jeg accepterer</label>
            </div>
            <div className="form-control">
              <input type="checkbox" id="newsletter-sign-up" />
              <label htmlFor="newsletter-sign-up">
                Tilmeld mig nyhedsbrevet og giv mig besked om gode tilbud og
                spændende nyheder.
              </label>
            </div>
            <Link to="/betaling">
              <button>→</button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
