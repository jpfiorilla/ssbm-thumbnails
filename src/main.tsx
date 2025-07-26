import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { TokenProvider } from "./context";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
