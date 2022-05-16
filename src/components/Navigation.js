import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Burgermenu from "./Burgermenu";

export default function Navigation() {
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
              <img src={`/images/logo_reviv.svg`} alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/upcycling">Upcycling</Link>
          </li>
          <li>
            <Link to="/about">Om os</Link>
          </li>
        </ul>
        <div className="logo-container">
          <Link to="/">
            <img src={`/images/logo_reviv.svg`} alt="logo" className="mobile-logo" />
          </Link>
        </div>
        <Burgermenu />
      </nav>

      <Outlet></Outlet>

      <style jsx>
        {`
          .navigation ul {
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: absolute;
            list-style-type: none;
          }

          @media (min-width: 800px) {
            .navigation ul {
              display: flex;
              justify-content: center;
              gap: 120px;
              width: 95%;
              height: 50px;
              //position: unset;
            }
          }
        `}
      </style>
    </>
  );
}
