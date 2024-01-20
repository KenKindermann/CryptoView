import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { DataFetchProvider } from "./provider/fetchDataContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataFetchProvider>
        <App />
      </DataFetchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
