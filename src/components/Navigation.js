import { Outlet, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
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
      </nav>

      <Outlet></Outlet>
    </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Frontpage />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="collections" element={<Collections />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
