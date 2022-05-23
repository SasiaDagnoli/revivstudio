import { useState } from "react";
import { Link } from "react-router-dom";
export default function Delivery(props) {
  console.log(props.formData);
  return (
    <div>
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
      <section className="delivery-section">
        <h1>2. Forsendelsesmetode</h1>
        <form action="">
          <div className="form-control">
            <input type="checkbox" id="postnord-pakkeboks" />
            <label htmlFor="postnord-pakkeboks">
              Postnord - Pakkeboks (Gratis over Kr. 299) <br /> Levering til
              nærmeste posthus/pakkeboks <br />
              <strong>39 Kr.</strong>
            </label>
          </div>

          <div className="form-control">
            <input type="checkbox" id="afhentningssted" />
            <label htmlFor="afhentningssted">
              {" "}
              Valgfrit afhentningssted <strong>Gratis</strong>
            </label>
          </div>

          <div className="form-control">
            <input type="checkbox" id="postnord-hjemme" />
            <label htmlFor="postnord-hjemme">
              Postnord - Hjemmelevering (Gratis over Kr. 499,-) <br /> Levering
              til din adresse med Postnord. <br />
              <strong>49 Kr.</strong>
            </label>
          </div>

          <div className="form-control">
            <input type="checkbox" id="postnord-erhverv" />
            <label htmlFor="postnord-erhverv">
              {" "}
              Postnord - Erhvers (Gratis over 499,-) <br /> Modtag pakken på dit
              arbejde <br />
              <strong>39 Kr.</strong>
            </label>
          </div>
          <Link to="/gennemse">
            <button>→</button>
          </Link>
        </form>
      </section>
    </div>
  );
}
