import { Link } from "react-router-dom";

export default function Receipt(props) {
  return (
    <div>
      <section className="receipt-section">
        <h1>Ordre gennemført</h1>
        <h2>Kære {props.formData.fullname}</h2>
        <p>
          Tak for din bestilling. <br />
          Vi går straks i gang med at pakke dine varer. Når din ordre er pakket, sender vi en email til <strong> {props.formData.email} </strong> med dit Track and Trace nummer, så du kan følge din pakke. <br /> <br />
          Vi har også sendt dig en email med din ordrebekræftigelse.
        </p>
        <p>
          De bedste hilsner <br />
          Sarah
        </p>
        <Link to="/">
          <button className="submit-btn">Tilbage til forsiden</button>
        </Link>
      </section>
    </div>
  );
}
