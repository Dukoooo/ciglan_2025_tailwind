import { createBrowserRouter } from "react-router-dom";

import About from "./src/pages/About";
import HomePage from "./src/pages/HomePage";

export const router = createBrowserRouter([
  { path: "/homePage", element: <HomePage /> },
  { path: "/about", element: <About /> },
]);
