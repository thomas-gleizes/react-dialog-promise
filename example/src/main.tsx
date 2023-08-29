import React from "react";
import ReactDOM from "react-dom/client";
import { DialogProvider } from "react-dialog-promise";

import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DialogProvider>
    <App />
  </DialogProvider>
);
