import React from "react";
import "./App.css";
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import GetMerch from "./Components/getMerch/getMerch.js";
import AddMerch from "./Components/AddMerch/addMerch.js";
import ViewMerch from "./Components/ViewMerch/ViewMerch.js";
import malabeBackground from "./Components/Home/SLIIT-malabe.jpg";
import { Route, Routes } from "react-router-dom";

function App() {
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
