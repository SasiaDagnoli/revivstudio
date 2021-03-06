import { useState, useEffect } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import About from "./components/About";
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
import Receipt from "./components/Receipt";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [products, setProducts] = useState([]);
  const [paymentState, setPayment] = useState();

  const [basket, setBasket] = useState([]);
  const [deliveryState, setDelivery] = useState();
  const initialValue = 0;
  const amount = basket.reduce(function (p, c) {
    return p + c.amount;
  }, initialValue);

  const initialFormData = Object.freeze({
    company: "",
    fullname: "",
    address: "",
    country: "",
    phone: "",
    email: "",
    note: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  useEffect(() => {
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

      data.forEach((product) => {
        if (product.popular === true) {
          popularArray.push(product);
        }
      });

      data.forEach((product) => {
        if (product.explore === true) {
          exploreArray.push(product);
        }
      });
      setProducts(data);
    };
    getTheData();
  }, []);

  return (
    <div className="App" id="outer-container">
      <div id="page-wrap">
        {basket.length > 0 && <p className="amount-counter">{amount}</p>}
        <BrowserRouter>
          <ScrollToTop>
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
                <Route index element={<Frontpage products={products} />} />
                <Route
                  path="upcycling"
                  element={<Upcycling products={products} />}
                />
                <Route path="om-os" element={<About products={products} />} />
                <Route path="kurv" element={<Checkout basket={basket} />} />
                <Route
                  path="kontaktinfo"
                  element={
                    <ContactInfo
                      basket={basket}
                      formData={formData}
                      updateFormData={updateFormData}
                    />
                  }
                ></Route>
                <Route
                  path="levering"
                  element={
                    <Delivery
                      basket={basket}
                      formData={formData}
                      deliveryState={deliveryState}
                      setDelivery={setDelivery}
                    />
                  }
                ></Route>
                <Route
                  path="gennemse"
                  element={
                    <ApproveOrder
                      basket={basket}
                      deliveryState={deliveryState}
                    />
                  }
                ></Route>
                <Route
                  path="betaling"
                  element={
                    <Payment
                      basket={basket}
                      paymentState={paymentState}
                      setPayment={setPayment}
                    />
                  }
                ></Route>
                <Route
                  path="kvittering"
                  element={
                    <Receipt
                      basket={basket}
                      formData={formData}
                      deliveryState={deliveryState}
                    />
                  }
                ></Route>
                <Route
                  path="produkt/:id"
                  element={<SingleView setBasket={setBasket} basket={basket} />}
                />
              </Route>
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
