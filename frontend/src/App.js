import React from "react";
import "./App.css";
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import GetMerch from "./Components/getMerch/getMerch.js";
import AddMerch from "./Components/AddMerch/addMerch.js";
import ViewMerch from "./Components/ViewMerch/ViewMerch.js";
import Cart from "./Components/Cart/Cart.js";
import Checkout from "./Components/Checkout/Checkout.js";
import malabeBackground from "./Components/Home/SLIIT-malabe.jpg";
import sliitLogo from "./Components/Navbar/logo.png";
import { Route, Routes } from "react-router-dom";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="app-shell"
      style={{ "--app-background-image": `url(${malabeBackground})` }}
    >
      <div className="app-background" />
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/merch" element={<GetMerch />} />
          <Route path="/merch/:id" element={<ViewMerch />} />
          <Route path="/addmerch" element={<AddMerch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="app-footer-inner">
          <div className="app-footer-content">
            <div>
              <div className="app-footer-brand">
                <img
                  className="app-footer-logo"
                  src={sliitLogo}
                  alt="SLIIT Event Management System logo"
                />
                <div>
                  <p className="app-footer-eyebrow">SLIIT Event Management System</p>
                  <h2>Merchandise for Your all Events</h2>
                </div>
              </div>
              <p className="app-footer-copy">
                Manage browsing, ordering, and collection with a cleaner student-focused experience.
              </p>
            </div>
            <div className="app-footer-meta">
              <p>Support: support@sliitems.lk</p>
              <p>Collection desk: Student Services Center</p>
              <p>© {currentYear} SLIIT Event Management System</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
