import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Delivery from "./Delivery";

export default function ContactInfo(props) {
  let navigate = useNavigate();
  /* const initialFormData = Object.freeze({
    company: "",
    fullname: "",
    address: "",
    country: "",
    phone: "",
    email: "",
    note: "",
  }); */

  const CustomerInformation = () => {
    /*  const [formData, updateFormData] = useState(initialFormData); */
    const handleChange = (e) => {
      /* props.updateFormData((old) => ({
        ...props.old,

        [e.target.name]: e.target.value.trim(),
      })); */
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      /* console.log(e.target.elements);
      console.log(props.formData); */
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
            <input type="text" name="company" onChange={handleChange} />
          </div>
          <label>
            Fulde navn
            <input
              required
              type="text"
              name="fullname"
              onChange={handleChange}
            />
          </label>
          <label>
            Adresse
            <input
              required
              type="text"
              name="address"
              onChange={handleChange}
            />
          </label>
          <label>
            Land
            <input
              required
              type="text"
              name="country"
              onChange={handleChange}
            />
          </label>
          <label>
            Telefon
            <input required type="text" name="phone" onChange={handleChange} />
          </label>
          <label>
            E-mail
            <input required type="text" name="email" onChange={handleChange} />
          </label>
          <label>
            Notat
            <input type="text" name="note" onChange={handleChange} />
          </label>

          <button className="submit-btn">→</button>
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
