import { createBrowserRouter } from "react-router-dom";

import About from "./src/pages/About";
import HomePage from "./src/pages/HomePage";
import Services from "./src/pages/Services";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/homePage", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/services/:serviceId", element: <Services /> },
]);

export default router;
