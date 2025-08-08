import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/poppins";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ScrollToTopButton from "./components/ScrollToTopButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollToTopButton />
    <RouterProvider router={router} />
  </StrictMode>
);
