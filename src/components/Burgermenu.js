export default function Burgermenu({ isOpen }) {
  return (
    <>
      <div className="mobilemenu">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>

      <style jsx>
        {`
          .burger1 {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }
          .burger3 {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </>
  );
}

// import { slide as Menu } from "react-burger-menu";
// import "../styles/sidebar.css";

// export default function Burgermenu() {
//   return (
//     <Menu className="new-burger">
//       <a id="home" className="menu-item" href="/">
//         Home
//       </a>
//       <a id="about" className="menu-item" href="/About">
//         Om os
//       </a>
//       <a id="contact" className="menu-item" href="/Upcycling">
//         Upcycling
//       </a>
//     </Menu>
//   );
// }
