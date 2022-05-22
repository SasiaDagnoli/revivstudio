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
        className="new-burger"
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <li>
          <Link to="/shop" onClick={closeSideBar}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/kollektioner" onClick={closeSideBar}>
            Kollektioner
          </Link>
        </li>

        <li>
          <Link to="/upcycling" onClick={closeSideBar}>
            Upcycling
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
