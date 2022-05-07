import { useState } from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import About from "./components/About";
import Collections from "./components/Collections";
import Frontpage from "./components/Frontpage";
import Upcycling from "./components/Upcycling";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="outer-container">
      {/* Navigation  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Collections />} />
            <Route index element={<Frontpage />} />
            <Route path="upcycling" element={<Upcycling />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Navigation done */}
      <Footer />
    </div>
  );
}

export default App;
