import { createRoot } from "react-dom/client";
import "./styles/index.css";
import * as React from "react";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
