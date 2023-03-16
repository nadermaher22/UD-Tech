import React from "react";
import "./i18n";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
