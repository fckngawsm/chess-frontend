import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root/Root";
import { Login } from "../page/Login";
import { Register } from "../page/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);
