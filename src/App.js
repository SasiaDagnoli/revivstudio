import { useState, useEffect } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import About from "./components/About";
import Collections from "./components/Collections";
import Frontpage from "./components/Frontpage";
import Upcycling from "./components/Upcycling";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import Productlist from "./components/Productlist";
import Burgermenu from "./components/Burgermenu";

function App() {
  const [products, setProducts] = useState([]);

  const [basket, setBasket] = useState([]);

  // const Burgerbasket = (props) => {
  //   return (
  //     <div id="outer-container">
  //       <Basket pageWrapId={"page-wrap"} outerContainerId={"outer-container"} setBasket={setBasket} basket={basket}></Basket>

  //       {/* <div id="page-wrap">{products && <Productlist products={products} setBasket={setBasket} basket={basket}></Productlist>}</div> */}
  //     </div>
  //   );
  // };

  // <Shop product={products} setBasket={setBasket} basket={basket}></Shop>;

  return (
    <div className="App" id="outer-container">
      <Basket pageWrapId={"page-wrap"} outerContainerId={"outer-container"} setBasket={setBasket} basket={basket}></Basket>
      <div id="page-wrap">
        {/* Navigation  */}
        {/* <Burgermenu></Burgermenu> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="shop" element={<Shop products={products} setBasket={setBasket} basket={basket} />} />
              <Route path="collections" element={<Collections />} />
              <Route index element={<Frontpage />} />
              <Route path="upcycling" element={<Upcycling />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* Navigation done */}
        {/* <Shop product={products} setBasket={setBasket} basket={basket}></Shop> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
