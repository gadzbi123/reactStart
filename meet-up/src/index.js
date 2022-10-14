import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavContextsProvider } from "./store/FavContexts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavContextsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavContextsProvider>
);
