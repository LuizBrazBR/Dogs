import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Spinner from "./Components/Spinner.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />,
  // </StrictMode>
);
