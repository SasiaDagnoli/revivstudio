import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <div>
      <div className="checkout-steps">
        <ul>
          <li>Indkøbskurv →</li>
          <li>
            <strong>Oplysninger →</strong>
          </li>
          <li>Levering →</li>

          <li>Gennemgå →</li>
          <li>
            <strong>Betaling</strong>
          </li>
        </ul>
      </div>

      <section className="payment-section">
        <form action="">
          <div className="form-control">
            <input type="checkbox" id="mobilepay" />
            <label htmlFor="mobilepay">Mobilepay</label>
          </div>
          <div className="form-control">
            <input type="checkbox" id="kort" />
            <label htmlFor="kort">Kortbetaling</label>
          </div>
          <div className="card-form">
            <label htmlFor="name">Kortholders navn</label>
            <input type="text" id="name" />
            <label htmlFor="cardnumber">Kortnummer</label>
            <input type="tel" id="cardnumber" />
            <label htmlFor="expiry">Gyldig til</label>
            <input type="text" id="expiry" />
            <label htmlFor="cc">Kontrolcifre</label>
            <input type="text" id="cc" />
          </div>
          <div className="form-control">
            <input type="checkbox" id="bankoverførsel" />
            <label htmlFor="bankoverførsel">Bankoverførsel</label>
          </div>

          <Link to="/kvittering">
            <button>Videre</button>
          </Link>
        </form>
      </section>
    </div>
  );
}
