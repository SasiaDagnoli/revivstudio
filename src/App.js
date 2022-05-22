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
import SingleView from "./components/SingleView";
import Checkout from "./components/Checkout";
import ContactInfo from "./components/ContactInfo";
import Delivery from "./components/Delivery";
import ApproveOrder from "./components/ApproveOrder";
import Payment from "./components/Payment";
import MyBasket from "./components/MyBasket";

function App() {
  const [products, setProducts] = useState([]);

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log("GetTheData");

    const getTheData = async () => {
      const res = await fetch("https://revivstudio-8a0a.restdb.io/rest/shop", {
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "62741849e8128861fcf3d098",
        },
      });
      const data = await res.json();
      const popularArray = [];
      const exploreArray = [];
      console.log("data", data);

      data.forEach((product) => {
        if (product.popular === true) {
          popularArray.push(product);
        }
      });
      console.log("popular", popularArray);

      data.forEach((product) => {
        if (product.explore === true) {
          exploreArray.push(product);
        }
      });
      console.log("explore", exploreArray);
      setProducts(data);
    };
    getTheData();
  }, []);

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
      {/* <Basket
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        setBasket={setBasket}
        basket={basket}
      ></Basket> */}
      <div id="page-wrap">
        {/* Navigation  */}
        {/* <Burgermenu></Burgermenu> */}
        <BrowserRouter>
          <Basket
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            setBasket={setBasket}
            basket={basket}
          ></Basket>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                path="shop"
                element={
                  <Shop
                    products={products}
                    setBasket={setBasket}
                    basket={basket}
                  />
                }
              />
              <Route path="kollektioner" element={<Collections />} />
              <Route index element={<Frontpage products={products} />} />
              <Route path="upcycling" element={<Upcycling />} />
              <Route path="om-os" element={<About />} />
              <Route path="kurv" element={<Checkout basket={basket} />} />
              <Route
                path="kontaktinfo"
                element={<ContactInfo basket={basket} />}
              ></Route>
              <Route
                path="levering"
                element={<Delivery basket={basket} />}
              ></Route>
              <Route
                path="gennemse"
                element={<ApproveOrder basket={basket} />}
              ></Route>
              <Route
                path="betaling"
                element={<Payment basket={basket} />}
              ></Route>
              <Route
                path="produkt/:id"
                element={<SingleView setBasket={setBasket} basket={basket} />}
              />
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
