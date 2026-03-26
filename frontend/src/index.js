import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <browserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </browserRouter>,
  document.getElementById("root"),
);
