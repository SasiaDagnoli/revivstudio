import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Burgermenu from "./Burgermenu";

export default function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/collections">Kollektioner</Link>
          </li>
          <li>
            <Link to="/">
              <img src={`./images/logo_reviv.svg`} alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/upcycling">Upcycling</Link>
          </li>
          <li>
            <Link to="/about">Om os</Link>
          </li>
        </ul>
        <div className="burgermenu" onClick={toggleHamburger}>
          <Burgermenu isOpen={hamburgerOpen} />
        </div>
      </nav>

      <Outlet></Outlet>

      <style jsx>
        {`
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: absolute;
            list-style-type: none;
          }

          @media (min-width: 800px) {
            .navigation {
            }
            .navigation ul {
              display: flex;
              justify-content: space-evenly;
              width: 100%;
              height: 50px;
              position: unset;
            }
          }
        `}
      </style>
    </>
  );
}
