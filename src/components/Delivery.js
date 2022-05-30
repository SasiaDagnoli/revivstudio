import { useNavigate } from "react-router-dom";
export default function Delivery(props) {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/gennemse", { replace: true });
  };
  return (
    <div>
      <section className="delivery-section">
        <div className="checkout-steps">
          <ul>
            <li>Indkøbskurv →</li>
            <li>Oplysninger →</li>
            <li>
              <strong>Levering →</strong>
            </li>

            <li>Gennemgå →</li>
            <li>Betaling </li>
          </ul>
        </div>
        <h1>2. Forsendelsesmetode</h1>
        <div className="delivery-form">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input required type="radio" id="postnord-pakkeboks" name="delivery" value="39" onChange={(e) => props.setDelivery(e.target.value)} />
              <label htmlFor="postnord-pakkeboks">
                Postnord - Pakkeboks (Gratis over Kr. 299) <br /> Levering til nærmeste posthus/pakkeboks <br />
                <strong>39 Kr.</strong>
              </label>
            </div>

            <div className="form-control">
              <input type="radio" id="afhentningssted" name="delivery" value="0" onChange={(e) => props.setDelivery(e.target.value)} />
              <label htmlFor="afhentningssted">
                Valgfrit afhentningssted <strong>Gratis</strong>
              </label>
            </div>

            <div className="form-control">
              <input type="radio" id="postnord-hjemme" name="delivery" value="49" onChange={(e) => props.setDelivery(e.target.value)} />
              <label htmlFor="postnord-hjemme">
                Postnord - Hjemmelevering (Gratis over Kr. 499,-) <br /> Levering til din adresse med Postnord. <br />
                <strong>49 Kr.</strong>
              </label>
            </div>

            <div className="form-control">
              <input type="radio" id="postnord-erhverv" name="delivery" value="39" onChange={(e) => props.setDelivery(e.target.value)} />
              <label htmlFor="postnord-erhverv">
                Postnord - Erhvers (Gratis over 499,-) <br /> Modtag pakken på dit arbejde <br />
                <strong>39 Kr.</strong>
              </label>
            </div>
            {/* <Link to="/gennemse">
            <button>→</button>
          </Link> */}
            <button className="submit-btn">→</button>
          </form>
        </div>
      </section>
    </div>
  );
}
