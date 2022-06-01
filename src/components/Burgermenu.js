import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Burgermenu() {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <div id="burger-menu-button">
      <Menu
        customBurgerIcon={
          <img src={`./images/burgericon.png`} alt="navigation" />
        }
        className="new-burger"
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <li>
          <Link to="/" onClick={closeSideBar}>
            Forside
          </Link>
        </li>

        <li>
          <Link to="/shop" onClick={closeSideBar}>
            Shop
          </Link>
        </li>

        <li>
          <Link to="/upcycling" onClick={closeSideBar}>
            Send smykker til upcycling
          </Link>
        </li>
        <li>
          <Link to="/om-os" onClick={closeSideBar}>
            Om os
          </Link>
        </li>
      </Menu>
    </div>
  );
}
