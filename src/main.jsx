import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/800.css";
import "@fontsource/roboto/900.css";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/space-mono";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { RouterProvider } from "react-router-dom";
import router from "../router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);
