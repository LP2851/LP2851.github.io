import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initFontAwesomeLibrary } from "./helpers/FontAwesome";
import App from "./App";
import "./index.css";

initFontAwesomeLibrary();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
