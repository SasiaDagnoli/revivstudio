export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-main">
          <div className="footer-shop">
            <h2>Shop</h2>
            <p>Nyheder</p>
            <p>Øreringe</p>
            <p>Armbånd</p>
            <p>Ringe</p>
            <p>Halskæder</p>
            <p>Ankelkæder</p>
            <p>Kollektioner</p>
          </div>
          <div className="footer-help">
            <h2>Hjælp</h2>
            <p>Kundeservice</p>
            <p>Find Boksen</p>
            <p>Find Forhandler</p>
            <p>Vilkår og Betingelser</p>
            <p>Kontakt Os</p>
            <p>Gavekort</p>
            <p>Cookieindstillinger</p>
          </div>
          <div className="footer-newsletter">
            <h2>Nyhedsbrev</h2>
            <p>
              Tilmeld dig vores nyhedsbrev og vær den første til at blive <br />{" "}
              opdateret på nye drops, promotions og andre spændende nyheder{" "}
              <br /> fra Réviv Studio
            </p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Indtast din e-mail her"
              />
              <hr />
              <div className="checkbox-label">
                <input type="checkbox" name="checkbox" />
                <label htmlFor="checkbox">
                  Jeg har læst og accepterer privatlivspolitikken
                </label>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
