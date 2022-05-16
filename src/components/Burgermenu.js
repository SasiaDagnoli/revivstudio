import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Burgermenu() {
  return (
    <div id="burger-menu-button">
      <Menu className="new-burger">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/collections">Kollektioner</Link>
        </li>

        <li>
          <Link to="/upcycling">Upcycling</Link>
        </li>
        <li>
          <Link to="/about">Om os</Link>
        </li>
      </Menu>
    </div>
  );
}
