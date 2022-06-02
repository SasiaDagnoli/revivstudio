import { useNavigate } from "react-router-dom";

export default function ContactInfo(props) {
  let navigate = useNavigate();

  const CustomerInformation = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      props.updateFormData({
        company: e.target.company.value,
        fullname: e.target.fullname.value,
        address: e.target.address.value,
        country: e.target.country.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        note: e.target.note.value,
      });
      navigate("/levering", { replace: true });
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Firma</label>
            <input type="text" name="company" />
          </div>
          <label>
            Fulde navn*
            <input required type="text" name="fullname" />
          </label>
          <label>
            Adresse*
            <input required type="text" name="address" />
          </label>
          <label>
            Land*
            <input required type="text" name="country" />
          </label>
          <label>
            Telefon*
            <input required type="text" name="phone" inputMode="numeric" />
          </label>
          <label>
            E-mail*
            <input required type="text" name="email" inputMode="email" />
          </label>
          <label>
            Notat
            <input type="text" name="note" />
          </label>

          <button className="submit-btn">
            <img src={`./images/pil.png`} alt="" />
          </button>
        </form>
      </>
    );
  };

  return (
    <div>
      <section className="contactinfo-section">
        <div className="checkout-steps">
          <ul>
            <li>Indkøbskurv →</li>
            <li>
              <strong>Oplysninger →</strong>
            </li>
            <li>Levering →</li>

            <li>Gennemgå →</li>
            <li>Betaling </li>
          </ul>
        </div>
        <h1>1. Kontaktoplysninger</h1>
        <section className="form-section">
          <CustomerInformation basket={props.basket}></CustomerInformation>
        </section>
      </section>
    </div>
  );
}
