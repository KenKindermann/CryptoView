import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { CurrentDataProvider } from "./provider/CurrentDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentDataProvider>
        <App />
      </CurrentDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
