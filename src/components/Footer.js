import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-main">
          <div className="footer-shop">
            <input
              type="checkbox"
              id="shopAccordion"
              className="dropDown_btn"
            />
            <label htmlFor="shopAccordion" className="dropDown_label">
              <h2>Shop</h2>
            </label>
            <div className="linklist">
              <p>Nyheder</p>
              <p>Øreringe</p>
              <p>Armbånd</p>
              <p>Ringe</p>
              <p>Halskæder</p>
            </div>
            <hr className="hraccordion" />
          </div>
          <div className="footer-help">
            <input
              type="checkbox"
              id="helpAccordion"
              className="dropDown_btn"
            />
            <label htmlFor="helpAccordion" className="dropDown_label">
              <h2>Hjælp</h2>
            </label>
            <div className="linklist">
              <p>Kundeservice</p>
              <Link to="/upcycling">
                <p>Find Boksen</p>
              </Link>
              <p>Find Forhandler</p>
              <p>Vilkår og Betingelser</p>
              <p>Kontakt Os</p>
              <p>Gavekort</p>
              <p>Cookieindstillinger</p>
            </div>
            <hr className="hraccordion" />
          </div>
          <div className="footer-newsletter">
            <input
              type="checkbox"
              id="newsletterAccordion"
              className="dropDown_btn"
            />
            <label htmlFor="newsletterAccordion" className="dropDown_label">
              <h2>Nyhedsbrev</h2>
            </label>
            <div className="linklist">
              <p>
                Tilmeld dig vores nyhedsbrev og vær den første til at blive
                <br /> opdateret på nye drops, promotions og andre spændende
                nyheder <br /> fra Réviv Studio
              </p>
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Indtast din e-mail her"
                />
                <hr />
                <div className="checkbox-label">
                  <button>Tilmeld mig</button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-socialmedia">
            <img src={`./images/instagram.svg`} alt="" />
            <img src={`./images/facebook.svg`} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}
