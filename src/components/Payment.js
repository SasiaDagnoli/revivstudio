import { useNavigate } from "react-router-dom";

export default function Payment(props) {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/kvittering", { replace: true });
  };

  if (props.paymentState === undefined) {
    console.log("undefined");
  } else if (props.paymentState === "mobilepay") {
    document.querySelector("#phonenumber").setAttribute("required", "required");
    document.querySelector("#name").removeAttribute("required");
    document.querySelector("#cardnumber").removeAttribute("required");
    document.querySelector("#expiry").removeAttribute("required");
    document.querySelector("#cc").removeAttribute("required");
  } else if (props.paymentState === "card") {
    document.querySelector("#phonenumber").removeAttribute("required");
    document.querySelector("#name").setAttribute("required", "required");
    document.querySelector("#cardnumber").setAttribute("required", "required");
    document.querySelector("#expiry").setAttribute("required", "required");
    document.querySelector("#cc").setAttribute("required", "required");
  } else {
    document.querySelector("#phonenumber").removeAttribute("required");
    document.querySelector("#name").removeAttribute("required");
    document.querySelector("#cardnumber").removeAttribute("required");
    document.querySelector("#expiry").removeAttribute("required");
    document.querySelector("#cc").removeAttribute("required");
  }

  return (
    <div>
      <section className="payment-section">
        <div className="checkout-steps">
          <ul>
            <li>Indkøbskurv →</li>
            <li>Oplysninger →</li>
            <li>Levering →</li>

            <li>Gennemgå →</li>
            <li>
              <strong>Betaling</strong>
            </li>
          </ul>
        </div>
        <h1>4. Betaling</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mobilepay-div">
            <input
              required
              type="radio"
              name="paymentmethod"
              id="mobilepay"
              className="dropDown_btn_payment"
              value="mobilepay"
              onChange={(e) => props.setPayment(e.target.value)}
            />
            <label htmlFor="mobilepay" className="dropDown_label_payment">
              <img
                className="mp-logo"
                src={`./images/mobilepay_logo_small.png`}
                alt=""
              />
            </label>
            <div className="mobilepay-form paymentform">
              <label htmlFor="phonenumber">Telefon nr.*</label>
              <input type="tel" id="phonenumber" />
            </div>
          </div>
          <div className="form-control">
            <input
              type="radio"
              name="paymentmethod"
              id="kort"
              className="dropDown_btn_payment"
              value="card"
              onChange={(e) => props.setPayment(e.target.value)}
            />
            <label htmlFor="kort">Kortbetaling</label>
            <div className="card-form paymentform">
              <label htmlFor="name" className="dropDown_label_payment">
                Kortholders navn*
              </label>
              <input minLength="1" autoFocus type="text" id="name" />
              <label htmlFor="cardnumber">Kortnummer*</label>
              <input
                type="tel"
                id="cardnumber"
                minLength="16"
                maxLength="16"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
              />
              <div className="expiry-cc-content">
                <div className="expiry-content">
                  <label htmlFor="expiry">Gyldig til*</label>
                  <input
                    type="text"
                    id="expiry"
                    pattern="([0-9]{2}+[/]+?){2}"
                    placeholder="MM/ÅÅ"
                    minLength="4"
                    maxLength="4"
                    inputMode="numeric"
                  />
                </div>
                <div className="cc-content">
                  <label htmlFor="cc">Kontrolcifre*</label>
                  <input
                    type="text"
                    id="cc"
                    minLength="3"
                    maxLength="3"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="submit-btn btn-text">Gennemfør køb</button>
        </form>
      </section>
    </div>
  );
}
