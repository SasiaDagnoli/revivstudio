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
            <Link to="/">Home</Link>
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
            background-color: blue;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: absolute;
          }
        `}
      </style>
    </>
  );
}
