import { Outlet, Link } from "react-router-dom";
import Burgermenu from "./Burgermenu";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={`/images/logo_reviv.svg`} alt="logo" className="mobile-logo" />
          </Link>
        </div>
        <Burgermenu />
      </nav>

      <Outlet></Outlet>
    </>
  );
}
