import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/800.css";
import "@fontsource/roboto/900.css";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/600.css";

import "@fontsource/space-mono";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
