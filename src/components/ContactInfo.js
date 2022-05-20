import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <div>
      <div className="checkout-steps">
        <ul>
          <li>Indkøbskurv →</li>
          <li>
            <strong>Oplysninger →</strong>
          </li>
          <li>Levering →</li>
          <li>Betaling →</li>
          <li>Gennemgå</li>
        </ul>
      </div>
      <section className="contactinfo-section">
        <h1>1. Kontaktoplysninger</h1>

        <form action="">
          <label htmlFor="company">Firma</label>
          <input type="text" id="company" />

          <label htmlFor="name">Fulde navn</label>
          <input type="text" id="name" />

          <label htmlFor="adress">Adresse</label>
          <input type="text" id="adress" />

          <label htmlFor="country">Land</label>
          <input type="text" id="country" />

          <label htmlFor="telephone">Telefon</label>
          <input type="tel" id="telephone" minLength={8} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="notes">Notat</label>
          <input type="text" id="notes" />

          <div className="other-adress-check">
            <input type="checkbox" id="other-adress" />
            <label htmlFor="other-adress">Levering til anden adresse</label>
          </div>

          <Link to="/kontaktinfo">
            <button>→</button>
          </Link>
        </form>
      </section>
    </div>
  );
}
