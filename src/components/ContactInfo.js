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
              // required
              type="text"
              name="fullname"
              onChange={handleChange}
            />
          </label>
          <label>
            Adresse
            <input
              // required
              type="text"
              name="address"
              onChange={handleChange}
            />
          </label>
          <label>
            Land
            <input
              // required
              type="text"
              name="country"
              onChange={handleChange}
            />
          </label>
          <label>
            Telefon
            <input
              // required
              type="text"
              name="phone"
              onChange={handleChange}
            />
          </label>
          <label>
            E-mail
            <input
              // required
              type="text"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label>
            Notat
            <input type="text" name="note" onChange={handleChange} />
          </label>

          <button>Submit</button>
        </form>
      </>
    );
  };

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
          <li>Betaling </li>
        </ul>
      </div>
      <section className="contactinfo-section">
        <h1>1. Kontaktoplysninger</h1>
        <section className="form-section">
          <CustomerInformation basket={props.basket}></CustomerInformation>
        </section>

        {/*  <form action="">
          <label htmlFor="company">Firma</label>
          <input name="company" type="text" id="company" />

          <label htmlFor="name">Fulde navn</label>
          <input name="fullname" type="text" id="name" />

          <label htmlFor="adress">Adresse</label>
          <input name="address" type="text" id="adress" />

          <label htmlFor="country">Land</label>
          <input name="country" type="text" id="country" />

          <label htmlFor="telephone">Telefon</label>
          <input name="phone" type="tel" id="telephone" minLength={8} />

          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" />

          <label htmlFor="notes">Notat</label>
          <input name="note" type="text" id="notes" />

          <div className="other-adress-check">
            <input type="checkbox" id="other-adress" />
            <label htmlFor="other-adress">Levering til anden adresse</label>
          </div>

          <Link to="/levering">
            <button>→</button>
          </Link>
        </form> */}
      </section>
    </div>
  );
}
