import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Carte from "./pages/Carte/Carte";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Carte />
  </React.StrictMode>
);
