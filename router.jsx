import { createBrowserRouter } from "react-router-dom";

import About from "./src/pages/About";
import HomePage from "./src/pages/HomePage";
import Services from "./src/pages/Services";
import FormPage from "./src/pages/FormPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/homePage", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/services/:serviceId", element: <Services /> },
  { path: "/services/", element: <Services /> },
  { path: "/contact", element: <FormPage /> },
]);

export default router;
