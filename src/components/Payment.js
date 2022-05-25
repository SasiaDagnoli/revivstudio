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
            <input type="radio" name="paymentmethod" id="mobilepay" />
            <label htmlFor="mobilepay">
              <img className="mp-logo" src={`./images/mobilepay_logo_small.png`} alt="" />
            </label>
          </div>
          <div className="mobilepay-form">
            <label htmlFor="phonenumber">Telefon nr.*</label>
            <input type="tel" id="phonenumber" />
          </div>
          <div className="form-control">
            <input type="radio" name="paymentmethod" id="kort" />
            <label htmlFor="kort">Kortbetaling</label>
          </div>
          <div className="card-form">
            <label htmlFor="name">Kortholders navn*</label>
            <input required minLength="1" autoFocus type="text" id="name" />
            <label htmlFor="cardnumber">Kortnummer*</label>
            <input required type="tel" id="cardnumber" minLength="16" maxLength="16" inputMode="numeric" pattern="[0-9\s]{13,19}" />
            <div className="expiry-cc-content">
              <div className="expiry-content">
                <label htmlFor="expiry">Gyldig til*</label>
                <input required type="text" id="expiry" pattern="([0-9]{2}+[/]+?){2}" placeholder="MM/ÅÅ" minLength="4" maxLength="4" inputMode="numeric" />
              </div>
              <div className="cc-content">
                <label htmlFor="cc">Kontrolcifre*</label>
                <input required type="text" id="cc" minLength="3" maxLength="3" inputMode="numeric" />
              </div>
            </div>
          </div>
          {/* <div className="form-control">
            <input type="radio" name="paymentmethod" id="bankoverførsel" />
            <label htmlFor="bankoverførsel">Bankoverførsel</label>
          </div> */}

          <Link to="/kvittering">
            <input type="submit" />
          </Link>
        </form>
      </section>
    </div>
  );
}
