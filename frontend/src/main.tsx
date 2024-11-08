import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
);
